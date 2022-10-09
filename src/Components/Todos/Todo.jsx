import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, selectTodoById, updateTodo } from '../../Features/todosSlice';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Todo({ id }) {
    const todo = useSelector(state => selectTodoById(state, id))
    const dispatch = useDispatch();

    const [newTodoText, setNewTodoText] = useState(todo.body)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const handleDeleteTodo = () => dispatch(deleteTodo(id))

    const handleChangeTodoText = e => setNewTodoText(e.target.value)

    const handleUpdateTodo = () => {
        dispatch(updateTodo({ id, changes: { body: newTodoText, completed: false } }))
        handleClose()
    }

    const handleCompleteTodo = () => {
        dispatch(updateTodo({ id, changes: { completed: !todo.completed } }))
    }

    return (
        <Grid container item component={'li'} alignItems={'center'} xs={12} sx={{ width: '100%' }} spacing={1} >
            <Grid item xs={9} sx={{ cursor: 'pointer' }} onClick={handleCompleteTodo}>
                <Typography color={'text.primary'} className={todo.completed ? 'completed' : undefined} >
                    {todo.body}
                </Typography>
            </Grid>
            <Grid item xs={3} display={'flex'} justifyContent={'space-evenly'} flexDirection={'row'} >
                <Tooltip title={'Delete'}>
                    <IconButton onClick={handleDeleteTodo}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Edit'}>
                    <IconButton onClick={handleClickOpen} >
                        <BorderColorIcon />
                    </IconButton>
                </Tooltip>
            </Grid>


            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update your task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="updateTodo"
                        label="Edit Todo"
                        type="text"
                        fullWidth
                        sx={{ minWidth: 300 }}
                        variant="standard"
                        value={newTodoText}
                        onChange={handleChangeTodoText}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} size='small' >Cancel</Button>
                    <Button onClick={handleUpdateTodo} size='small' color={'success'} variant="outlined" >Save</Button>
                </DialogActions>
            </Dialog>

        </Grid>
    )
}
