import { useState } from "react"

import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifApp = () => {

  const [categories, setCategories] = useState(['One punch'])

  const onAddCategory = ( newCategory ) => {
    // Si la categoría ya existe, no la agrega. Tambien valida para key duplicadas
    if(categories.includes(newCategory)) return; 
    setCategories( prevCategories => [newCategory, ...prevCategories])
  }

  return (
    <>
    <h1>Gif App</h1>

    <AddCategory 
    onNewCategory={value => onAddCategory(value)}
    />

    <button onClick={onAddCategory}>Agregar</button>
  
      {categories.map( category => (
        <GifGrid 
        key={category}
        category={category}/>
      ))}

    </>
  )
}
