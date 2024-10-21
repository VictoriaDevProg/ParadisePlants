import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { categories } from '../../data/plantData';


const PlantListings = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {categories.map((category) => (
        <div key={category.category} style={{padding: '40px'}}>
          <h2 className="category-title" style={{textAlign:'center', fontSize: '2rem'}}>{category.category}</h2>
          <div className="plant-list" style={{textAlign: 'center'}}>
            {category.plants.map((plant) => (
              <div className="plant-card card-shadow" key={plant.id}>
                <div style={{display: 'block', textAlign: 'right'}}>
                  {plant.sale && <span style={{backgroundColor: 'red', padding: '3px', fontSize:'1.2rem', color:'white'}}>SALE</span>}
                </div>
                <div style={{padding:'20px'}}>
                  <img src={plant.photo} alt={plant.name} style={{ width: '200px', height:'300px' }} />
                  <h3 style={{fontWeight: 'bolder', fontSize:'1.5rem'}}>{plant.name}</h3>
                  <p style={{fontSize:'1.2rem'}}>{plant.description}</p>
                  <p style={{fontSize:'1.3rem', fontWeight:'bold', color:'red'}}>${plant.price}</p>
                  <button 
                    style={{ backgroundColor:'grey', padding:'8px 18px', borderRadius:'7px', fontSize: '1.3rem', color:'white'}}
                    onClick={() =>
                      dispatch(addToCart({ ...plant, selectedQuantity: 1 }), 
                      alert(`The ${plant.name} has been added to the cart!`))
                    }
                    disabled={plant.quantity === 0}
                  >
                    {plant.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantListings;
