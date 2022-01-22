//imports
import React, {useContext, useEffect} from 'react';
import '../CartPage/CartPage.css'
//contexts
import { CartContext }  from '../../Context/CartContext/CartContext';
//firebase
import db from "../../firebase";
import {  collection, addDoc } from "@firebase/firestore";
//sweetalert
import Swal from 'sweetalert2'

const mostrarAlerta=() =>{
  Swal.fire(
      'Compra Realizada',
      'Gracias por Comprar.',
      'success'
    )
 }


export default function CartPage() {
    const [cart,setCart,clear]= useContext(CartContext);

    const PrecioTotal = cart.reduce((acc,curr) => acc + curr.price * curr.count , 0);

    const itemTotal = cart.reduce((acc,curr) => acc + curr.count,0);


    const Order = {
      buyer: {
        name: 'agustin',
        mail: 'agustinpf@gmail.com',
        phone: 11456784245
      },
        items: cart,
        Total: PrecioTotal
    }

    const AddOrder = () => {
      console.log('Order: ', Order )
      OrderFirebase(Order)
    }

    const OrderFirebase = async(newOrder) =>{
      const orderDeFirebase = collection(db, 'Orders');
      const orden= await addDoc(orderDeFirebase, newOrder);
      console.log('se genero Orden.', orden.id)
    }

    const removeItemFromCart = (id) => {
    
        setCart(cart.filter(item => item.id !== id) 
      
        )
      }


      const deleteOneItem = (id) => {
       
        let carritoElement = cart.find(item => item.id === id)

      if (carritoElement.count === 1 ){
        removeItemFromCart(id)

      } else{
        let carrito = cart
        carrito.map( item => {
          if( item.id === id){
            item.count = item.count - 1
          } 
          return item
        })
        setCart([...cart])
        
      }
      
      }
      const addItem = (id) => {
       
        let carritoElement = cart.find(item => item.id === id)

      if (carritoElement.count === 0 ){
        removeItemFromCart(id)

      } else{
        let carrito = cart
        carrito.map( item => {
          if( item.id === id){
            item.count = item.count + 1
          } 
          return item
        })
        setCart([...cart])      
    } 
      }
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  
     if(cart.length === 0 ){
       return(
        <div className='text'>
     <div className='number'> 🛒 </div>
     <div className='not-found-text'>El carrito de compras está vacío. </div>
     <div className='description'>Seleccione items desde Productos.</div>
   </div>
       )
       
     } else{
      return (
        <div className='cart-title'>🛒 Carrito
        <div className="Contenedor-cart">
        <br/>
          {cart.map(item => ( <div className='cart-producto'> 
          <img alt="imagen producto" className='imagen-producto' href='imgproduct' src={`../assets/${item.img}`}/> 
          <div className=" cart-title-box"> {item.count}x  {item.title}  </div>
         <div className="cart-price-box">  $ {item.price}  </div>
         <div className='buttons-cart'>
         <button onClick={ () => deleteOneItem(item.id)} className="button1"> - </button> 
         <button onClick={() => addItem(item.id)} className="button1"> + </button> </div>
         <div className='delete-btn'>
         <button onClick={ () => removeItemFromCart(item.id)} className="delete-btn"> X </button> 
         </div>
         </div>  ))}
        <br/>
        <div className='clear-button-position'>
        <button className="clear-button" onClick={clear}>🚮 Vaciar Carrito </button>
        <div className='total-product-cart'> Hay un total de {itemTotal} productos en el carro.</div>
        </div>

       <div className="total-price-box">precio total: $ {PrecioTotal} </div>

       <div className='button-buy-position'>
       <button className="button-buy" onClick={AddOrder,() => mostrarAlerta()} >🤲 Finalizar Compra </button>
       </div>
       </div>  
       </div> 
         )
     }


  }