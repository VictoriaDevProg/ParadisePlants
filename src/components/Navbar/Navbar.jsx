import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavbarContainer } from './Navbar.styled'; // Styled components

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <NavbarContainer>
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{color:'white', paddingLeft:'30px', display: 'flex', alignItems:'center' }}>
        <i className="fas light fa-leaf" style={{marginTop:'18px', fontSize:'1.4rem', border:'4px solid white', borderRadius:'50%', padding:'4%'}}></i>
        <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>   
          <div style={{justifyContent:'space-between', marginLeft:'10px', marginTop:'60px', width:'400px'}}>
            <h2 style={{fontSize:'1.6rem' }}>Green Thumb Nursery</h2>
            <h6 style={{marginTop:'-20px', fontSize:'1.1rem', letterSpacing:'2px', fontStyle:'Italic'}}>Where Green Meets Serenity</h6>
          </div>
        </Link>
        </div>
      <div style={{padding: '20px'}}>
        {/* <Link to="/plants" style={{ marginRight: '20px' }}>Plants</Link> */}
        <div style={{}}>
        <Link to="/cart" style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{
          position: 'absolute',
          top: '-10px',
          color: 'white',
          borderRadius: '50%',
          padding: '5px 10px',
          fontSize: '1.4rem'
        }}>
          {totalQuantity}
        </span>
        <i className="fas fa-shopping-cart" style={{marginTop:'18px', fontSize:'1.4rem'}}></i>
      </Link>
        </div>
      </div>
    </nav>
    </NavbarContainer>
    
  );
};

export default Navbar;

