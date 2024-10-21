import { useNavigate } from 'react-router-dom';
import { LandingContainer, GetStartedButton } from './LandingPage.styled'; // Styled components

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <LandingContainer>
      <div className='banner' style={{display: 'flex'}}>
        <div className='about-us-text' style={{width:'30%', alignContent:'center'}}>
            <h1 style={{fontSize:'2.3rem'}}>Paradise Nursery</h1>
            <span style={{fontSize:'1.3rem'}}>Where Green Meets Serenity</span>
            <div style={{marginBottom:'4px solid white', margin:'30px'}}>______</div>
            <div>
            <GetStartedButton style={{backgroundColor:'green'}} onClick={() => navigate('/plants')}>Get Started</GetStartedButton>
            </div>  
        </div>
        <div className='about-us-text'style={{width:'60%'}}>
          <p>Welcome to Paradise Nursery! Where green meets serenity.</p>
          <p>At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of 
            high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and 
            more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every 
            plant enthusiast.</p>
          <p>Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. 
            Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of 
            the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your 
            home or office.</p>
        </div>
      
      </div>
 
    </LandingContainer>
  );
};

export default LandingPage;
