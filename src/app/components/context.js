import React from 'react'
import { useState, useReducer, useEffect } from 'react'

export const InputContext = React.createContext({})

const InputProvider = ({ children }) => {
    const [InputText, setInputText] = useState('')
    const [authorInput, setAuthorInput] = useState('')
    const [todos, setTodos] = useState([])
    const [activeTodo, setactiveTodo] = useState(null)
    const [isFormOpen, setisFormOpen] = useState(false)
    const createdDate = new Date();
    return (
        <InputContext.Provider value={{createdDate, InputText, setInputText, todos, setTodos, isFormOpen, setisFormOpen, activeTodo, setactiveTodo, authorInput, setAuthorInput}}>
            {children}
        </InputContext.Provider>
    )
}

export default InputProvider
