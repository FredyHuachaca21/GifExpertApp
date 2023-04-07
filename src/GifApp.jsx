import { useState } from "react"

import { AddCategory } from "./components/AddCategory"

export const GifApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Dragon ball'])
  console.log(categories)

  const onAddCategory = ( ) => {
    // setCategories([...categories, 'hola'])
    setCategories([...categories, 'hola'])
    
  }

  return (
    <>
    {/* Título */}
    <h1>Gif App</h1>

    {/* Input categoria */}
    <AddCategory/>

    <button onClick={onAddCategory}>Agregar</button>
    
    {/* Lista de categorias */}
    <ol>
      {categories.map( x => {
        return <li key={x}>{x}</li>
      })}
    </ol>

    </>
  )
}
