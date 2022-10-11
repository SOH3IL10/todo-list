import Grid from '@mui/material/Grid'
import React from 'react'
import ClearCompleted from './Components/ClearCompleted';
import FilterTodos from './Components/FilterTodos'
import ItemsLeft from './Components/ItemsLeft'
import './style.css';
import { useSelector } from 'react-redux';

export default function FiltersSection() {
    const theme = useSelector(state => state.theme.mode)

    return (
        <div className='filtersSectionWrapper'>
            <Grid container spacing={1} className={theme === 'dark' ? 'filtersSectionDarkTheme filtersSection' : 'filtersSection'} >
                <ItemsLeft />
                <FilterTodos />
                <ClearCompleted />
            </Grid>
        </div>

    )
}