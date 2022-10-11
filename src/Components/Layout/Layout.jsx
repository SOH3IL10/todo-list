import React from 'react';
import ThemeMode from '../ThemeMode';
import './style.css';
import Title from '../Title';
import AddTodo from '../AddTodo/AddTodo';
import Box from '@mui/material/Box';
import TodosList from '../Todos';
import FiltersSection from '../FiltersSection/FiltersSection';


function Layout() {
    return (
        <Box component={'div'} sx={{ bgcolor: 'background.default' }} className='container'>
            <ThemeMode />
            <Title />
            <AddTodo />
            <TodosList />
            <FiltersSection />
        </Box>
    )
}

export default Layout