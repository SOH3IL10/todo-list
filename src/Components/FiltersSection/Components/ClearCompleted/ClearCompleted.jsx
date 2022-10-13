import { Grid } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import { clearTodosCompleted } from '../../../../Features/todosSlice';
import { useDispatch } from 'react-redux';

export default function ClearCompleted() {
  const dispatch = useDispatch();
  const handleClickClearCompleted = () => dispatch(clearTodosCompleted())

  return (
    <Grid item xs={12} sm={3} className='itemsLeft'>
      <Button onClick={handleClickClearCompleted} color="secondary" >Clear Completed</Button>
    </Grid>
  )
}
