import { getGifs } from "../helpers/GetGifs"


export const GifGrid = ({category}) => {
  
  getGifs(category)

  return (
    <>
          <h2>{category}</h2>
          <p>hola mundo</p>
    </>
  )
}
