import { Grid } from '@mui/material'
import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch } from 'react-redux';
import { changeStatusFilter, statusFilter } from '../../../../Features/filterSlice';

export default function FilterTodos() {
    const [filter, setFilter] = React.useState('all');
    const dispatch = useDispatch();

    const handleChangeStatus = (status) => {
        dispatch(changeStatusFilter(status))
    }

    const renderedFilters = Object.keys(statusFilter).map(status => {
        const value = statusFilter[status];

        return (
            <ToggleButton key={value} onClick={() => handleChangeStatus(value)} value={value} aria-label={`${value} todos`}>
                {value}
            </ToggleButton>
        )
    })

    const handleFilterTodos = (event, newFilter) => {
        if (newFilter !== null) {
            setFilter(newFilter);
        }
    };

    return (
        <Grid item xs={6} >
            <ToggleButtonGroup
                size='small'
                value={filter}
                exclusive
                onChange={handleFilterTodos}
                aria-label="todos filter"
                color='info'
            >
                {renderedFilters}
            </ToggleButtonGroup>
        </Grid>
    )
}
