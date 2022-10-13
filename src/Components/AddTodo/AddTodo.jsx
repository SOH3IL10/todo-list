import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './style.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Features/todosSlice';

export default function AddTodo() {
    const [text, setText] = useState('')

    const dispatch = useDispatch();

    const canAdd = () => {
        return text.trim() === ''
    }

    const handleAddNewTodo = () => {
        dispatch(addTodo(text))
        setText('')
    }

    const handleKeyDown = e => {
        const addTodo = canAdd();
        if (e.keyCode === 13 && !addTodo)
            handleAddNewTodo()
    }

    const handleChangeText = e => setText(e.target.value)

    return (
        <div className='addTodoWrapper'>
            <Stack direction={'row'} justifyContent={'center'} spacing={1} sx={{ width: '90%' }} >
                <TextField size='small' className='inputBox' value={text} onKeyDown={handleKeyDown} onChange={handleChangeText} sx={{ width: '30%' }} id="outlined-basic" label="Enter your Task" variant="outlined" autoFocus />
                <Button variant="contained" disabled={canAdd()} color='info' size='small' sx={{ width: 150 }} onClick={handleAddNewTodo} >Add</Button>
            </Stack>
        </div>
    )
}
