import React from 'react'
import { useState } from 'react'

export const InputContext = React.createContext({})

const InputProvider = ({ children }) => {
    const [InputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [isFormOpen, setisFormOpen] = useState(false)

    return (
        <InputContext.Provider value={{InputText, setInputText, todos, setTodos, isFormOpen, setisFormOpen}}>
            {children}
        </InputContext.Provider>
    )
}

export default InputProvider
