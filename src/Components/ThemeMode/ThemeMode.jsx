import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import React, { useEffect } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../Features/themeSlice';

export default function ThemeMode() {
    const theme = useSelector(state => state.theme.mode)
    const dispatch = useDispatch()

    const themeSaved = localStorage.getItem('theme')

    useEffect(() => {
        if (themeSaved === 'dark')
            dispatch(changeTheme(themeSaved))
    }, [])

    const handleThemeToggle = () => {
        theme === 'light' ? dispatch(changeTheme('dark')) : dispatch(changeTheme('light'))
    }

    return (
        <div className='themeModeWrapper' >
            <IconButton onClick={handleThemeToggle} >
                {
                    theme === 'light' ? <ModeNightIcon /> : <LightModeIcon />
                }
            </IconButton>
        </div>
    )
}
