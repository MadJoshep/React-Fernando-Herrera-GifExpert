import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState()
    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    // const onInputChange = (event) =>{
    //     console.log(event.target.value)
    //     setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
    event.preventDefault()
    if(inputValue.trim().length <= 1) return
    // setCategories(categories => [inputValue, ...categories])
    setInputValue('');
    onNewCategory(inputValue.trim());
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder='Buscar GIFS'
            value={inputValue}
            // onChange={(event) => onInputChange(event)}
            onChange={onInputChange}
        />
    </form>
    )
}
