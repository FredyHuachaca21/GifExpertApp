import { useState } from "react"


export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One punch')

    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(inputValue)
    }

  return (
    <form onSubmit={onSubmit}>
    <input 
    type="text" 
    placeholder="buscar gifs"
    value={inputValue} 
    onChange={onInputChange}
    />
    </form>
  )
}
