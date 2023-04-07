import { useState } from "react"

export const GifApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Dragon ball'])
  console.log(categories)

  const onAddCategory = ( ) => {
    setCategories([...categories, 'hola'])
  }

  return (
    <>
    <h1>Gif App</h1>

    <button onClick={onAddCategory}>Agregar</button>

    <ol>
      {categories.map( x => {
        return <li key={x}>{x}</li>
      })}
    </ol>

    </>
  )
}
