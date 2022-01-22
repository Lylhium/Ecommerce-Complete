import React,{ useContext } from "react";
import  { Link } from 'react-router-dom'
import '../Product/Product.css'
import Counter from "../Counter/Counter";
//context
import { CartContext } from "../../Context/CartContext/CartContext";

const  Product= (props) => {
 
    const [cart, setCart] = useContext(CartContext);

    const { stock } = props

const addItem = (count)  => {
    const product = { id: props.id ,title: props.title, price: props.price ,img: props.image, count: count};
  
   let cartElement = { product ,count} 
    console.log('Elemento del Carrito',cartElement)

  if (isInCart(product)) {
      console.log('esta en carro')
     cartElement = cart.find( item => item.id === props.id) 
     cartElement.count = cartElement.count + count
  } else {
      setCart(currenState => [...currenState, product])
  }
  
}    
const isInCart = () => {
    return cart && cart.some(item => item.id === props.id)
  }


return (
    
    <div className="card">
        <div className= "first-product">
          <img alt="imagen producto" src={`../assets/${props.image} `} />
          <div className='producto-title'> {props.title} </div>
          <div className='producto-description'> {props.description} </div>
          <p className="price"> $ {props.price} </p>
          <div className="item-contador"> <Counter stock={stock} onAdd={addItem}/> </div>    
          <Link to={`/ItemDetailPage/${props.id}`}>  <button className="button1"> Ver </button></Link>
        </div> 
    </div>

 ) }
    
      export default  Product