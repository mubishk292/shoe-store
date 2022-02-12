import { useParams } from "react-router-dom"

export default ({data})=>{
  let {index} = useParams()
    let shoe = data[index]
    if(!shoe){
        return <h2>Shoe not Found</h2>
    }

    let {name , img} = shoe;
    return <div>
        <h2>{name}</h2>
        <img  src={img}  />
    </div>
}