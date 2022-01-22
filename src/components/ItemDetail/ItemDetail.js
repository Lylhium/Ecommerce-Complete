//imports
import React,{ useContext} from "react";
import Counter from "../Counter/Counter";
import "../ItemDetail/ItemDetail.css"

//context
import { CartContext } from "../../Context/CartContext/CartContext";

function ItemDetail(props) {
 
   
   const [cart,setCart]= useContext(CartContext);


  const addItem = (count)  => {
   const product = {id: props.data.id, title: props.data.title, price: props.data.price ,img: props.data.img ,count: count};
    
     let cartElement = { product ,count} 
      console.log('Elemento del Carrito',cartElement)
  
    if (isInCart(product)) {
        console.log('esta en carro')
       cartElement = cart.find( item => item.id === props.data.id) 
       cartElement.count = cartElement.count + count
    } else {
        setCart(currenState => [...currenState, product])
    }
    
  }    
  const isInCart = () => {
      return cart && cart.some(item => item.id === props.data.id)
    }
  



    return ( 
    <div className="Item-Detail">       
                    <img alt='imagendeproducto' className='img-detail'src={`../assets/${props.data.img}`} />
                    <div className='item-title-desc'>
                    <h1> {props.data.title} </h1>
                    <div className="item-desc"> {props.data.description} </div>
                    <h3>${props.data.price}</h3>
                    <div className="item-contador"> <Counter stock={props.data.stock} onAdd={addItem}  /> </div> 
                    <div className="descuento"> *5% de descuento Pagando en efectivo o transferencia.</div>
                    <div className="thoughts"> *Sacate las dudas Antes de comprar si tenes alguna duda escribinos por Whatsapp. </div>
                    </div>
           
              </div>  
      );}

    export  default ItemDetail;
    