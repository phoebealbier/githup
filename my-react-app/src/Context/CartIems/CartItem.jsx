import react, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross.png'
const CartItems=()=>{
    const {all_product,cartItems,removeFromCart}= useContext(ShopContext);
    return (
        <div className='cartItems'>
<div className="cart-items-format-main">
    <p>Products</p>
    <p>TitlePrice</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
</div>
<hr/>

{all_product.map((e)=>{
if(cartItems[e.id]>0)
{
    return 
    <div>
       
    <div className="cartitems-format">
    <img src= {e.imgage} alt =""className = 'carticon-product-icon'/>
    <p>{e.name}</p>
    <p>${e.new_price}</p>
    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
    <p>${e.new_price*cartItems[e.id]}</p>

<img src={remove_icon}onClick={()=>{removeFromCart}}alt=''/>
</div>
<hr/>

</div>

}

})}
</div>
)
}


export default CartItems
