import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTodos } from '../../../../Features/todosSlice'

export default function ItemsLeft() {
    const todos = useSelector(selectAllTodos)

    const itemLeft = todos.filter(item => item.completed === false).length

    return (
        <Grid item xs={3}>
            <Typography color={'text.primary'}>
                {
                    itemLeft > 1 ? `${itemLeft} Items left` : `${itemLeft} Item left`
                }
            </Typography>
        </Grid>
    )
}
