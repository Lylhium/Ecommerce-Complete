//imports
import React,{useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
//firebase
import db from "../../firebase";
import { doc, getDoc } from "@firebase/firestore";



export  default ItemDetailContainer;
    
function ItemDetailContainer() {

  const {  productId } = useParams(); 

  const [ProductInfo, setProductInfo] =  useState([])

 
 
  async function Getproduct (db) {
    const docRef = doc(db, 'products',`product${productId}` );
    const docSnap = await getDoc( docRef)
    
    return setProductInfo(docSnap.data(`product${productId}` ) )
  }
     useEffect (() => {
      Getproduct(db)
     })      
           
     
     
return ( 
     <div className="Detail-Container">
       {<ItemDetail data= {ProductInfo}/>}
     </div> );
    }
    
 