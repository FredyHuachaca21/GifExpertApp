import { useEffect } from "react"
import { getGifs } from "../helpers/GetGifs"


export const GifGrid = ({category}) => {

  useEffect(() => {
    getGifs(category)
  }, [])

  return (
    <>
          <h2>{category}</h2>
          <p>hola mundo</p>
    </>
  )
}
