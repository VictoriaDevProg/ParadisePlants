import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className='center-text'>
      <h2 style={{fontSize:'2rem'}}>Shopping Cart</h2>
      <div style={{ display:'flex', justifyContent:'center'}}>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul style={{flexDirection:'column', alignContent:'center'}}>
          {cart.items.map((plant) => (
            <li key={plant.id} style={{textAlign:'center', margin:'1%', listStyle:'none', display:'block'}}>
              <div className='card-shadow' style={{backgroundColor:'white', display:'flex', alignContent:'center', width:'500px'}}>
              <img src={plant.photo} alt={plant.name} style={{ width: '250px', height:'260px', padding:'14px', justifySelf:'center', alignSelf:'center' }} />
                <div style={{padding:'10px'}}>
                  <h3 style={{fontSize:'2rem'}}>{plant.name}</h3>
                  <div>
                    <span>{plant.name},  Unit Price: ${plant.price}</span>
                  </div>
                  <div style={{fontSize:'1.6rem'}}>
                    <button style={{fontSize:'2rem'}} onClick={() => dispatch(decreaseQuantity(plant.id))}>-</button>
                    <span>{plant.selectedQuantity}</span>
                    <button style={{fontSize:'2rem'}} onClick={() => dispatch(increaseQuantity(plant.id))}>+</button>
                  </div>
                  <p style={{fontWeight:'bolder', fontSize:'1.4rem'}}>Total: ${plant.price * plant.selectedQuantity}</p>
                  <button style={{backgroundColor:'red', color:'white', padding:'5px 20px', fontSize:'1.2rem', borderColor:'red', borderRadius:'7px'}} onClick={() => dispatch(removeFromCart(plant.id))}>Delete</button>
                </div> 
              </div>
              
            </li>
          ))}
        </ul>
      )}
      </div>
      <h3 style={{fontSize:'1.8rem'}}>Cart Total Amount: ${cart.totalAmount}</h3>
    </div>
  );
};

export default Cart;
