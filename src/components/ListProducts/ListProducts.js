//imports
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import '../ListProducts/ListProducts.css'
//firebase
import db from "../../firebase";
import {  collection, getDocs } from "@firebase/firestore";



export default function ListProducts() {
  

         const [products, setProduct] = useState([])

     async function Getproducts (db) {
    const productsCollection = collection (db, 'products');
    const productsSnapShot = await getDocs (productsCollection);
    const ProductsList = productsSnapShot.docs.map(doc => doc.data ());
    const ProductsID = productsSnapShot.docs.map ( doc => doc.id)
    return setProduct(ProductsList);
     }
     useEffect (() => {

      Getproducts (db)
      window.scrollTo(0, 0)
     },[])      

    return (
      <div>
        {products.length !== 0 ? (
        products.map( (product)=> {

        return (
          
                 <Product key={`item-${product.id}`} title={product.title} price={product.price} image={product.img} 
                                        stock={product.stock} description={product.description} id={product.id} /> )
           })
        ) : (
      <div className='loading'> 
        <img src={('../../assets/loading.gif')} alt='loading-gif'/> 
      </div>
         
        )}
      </div>
    )
  }
