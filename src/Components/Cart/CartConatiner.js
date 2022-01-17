import React,{useState} from 'react'
import CartItem from './CartItem'
import list from './data';


function CartConatiner() {
    const [data, setdata] = useState(list)
    return (
        <section className='cart'>
       
        {
            data.map((item)=>{
              return  <CartItem key={item.id} {...item} />
            })
        }


       


        </section>
     
    
   
       
    )
}

export default CartConatiner
