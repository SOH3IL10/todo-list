import { Grid } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import { clearTodosCompleted } from '../../../../Features/todosSlice';
import { useDispatch } from 'react-redux';

export default function ClearCompleted() {
  const dispatch = useDispatch();
  const handleClickClearCompleted = () => dispatch(clearTodosCompleted())

  return (
    <Grid item xs={3}>
      <Button onClick={handleClickClearCompleted} color="secondary" >Clear Completed</Button>
    </Grid>
  )
}
