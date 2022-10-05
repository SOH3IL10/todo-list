import React from 'react';
import Grid from '@mui/material/Grid';
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllTodos, selectTodoIds } from '../../Features/todosSlice';

export default function TodosList() {

  const todoIds = useSelector(selectTodoIds)
  const dispatch = useDispatch()

  const content = todoIds.map(id => <Todo id={id} key={id} />)

  const handleDeleteAllTodos = () => {
    dispatch(deleteAllTodos())
  }

  return (
    <Grid component={'ul'} container flexDirection={'column'} alignItems={'center'} sx={{ m: '2rem auto', borderRadius: 2, width: '60%', border: '1px solid #ccc', p: '0 1rem' }} >
      {content}
    </Grid>
  )
}
