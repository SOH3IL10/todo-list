import React from 'react';
import Grid from '@mui/material/Grid';
import Todo from './Todo';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { deleteAllTodos, selectTodosFiltredIds } from '../../Features/todosSlice';
import addTasks from '../../assets';
import './style.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function TodosList() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const todoIds = useSelector(selectTodosFiltredIds, shallowEqual)
  const dispatch = useDispatch();

  const handleDeleteAllTodos = () => {
    dispatch(deleteAllTodos())
    handleClose()
  }

  return (
    <Grid component={'div'} container flexDirection={'column'} alignItems={'center'} className='todosListWrapper'>
      {
        todoIds.length > 0 ?
          <>
            <Grid component={'ul'} container flexDirection={'column'} alignItems={'center'} sx={{ m: '2rem auto', borderRadius: 2, width: '60%', border: '1px solid #ccc', p: '0 1rem' }} >
              {todoIds.map(id => <Todo id={id} key={id} />)}
            </Grid>
            <Button variant="contained" color='error' size='small' sx={{ width: 150, m: '0 auto' }} onClick={handleClickOpen} >Delete All</Button>
          </>
          :
          <Grid component={'div'} display={'flex'} justifyContent={'center'}>
            <img src={addTasks} alt={'add tasks'} />
          </Grid>
      }
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete all tasks?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} autoFocus color={'info'} size='small' variant="outlined" >No</Button>
          <Button onClick={handleDeleteAllTodos} size='small' color={'warning'} variant="outlined" >Yes</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
