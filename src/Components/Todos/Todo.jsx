import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, selectTodoById } from '../../Features/todosSlice';

export default function Todo({ id }) {
    const todo = useSelector(state => selectTodoById(state, id))
    const dispatch = useDispatch();

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(id))
    }

    return (
        <Grid container item component={'li'} xs={12} sx={{ width: '100%' }} spacing={1} >
            <Grid item xs={9}>
                <Typography color={'text.primary'} >
                    {todo.body}
                </Typography>
            </Grid>
            <Grid item xs={3} display={'flex'} justifyContent={'space-evenly'} direction={'row'} >
                <Tooltip title={'Delete'}>
                    <IconButton onClick={handleDeleteTodo}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Edit'}>
                    <IconButton >
                        <BorderColorIcon />
                    </IconButton>
                </Tooltip>
            </Grid>
        </Grid>
    )
}
