import Client from '../components/Client/Client';
import Banner from '../components/banner/banner';
import FeaturedEvents from '../components/sections/servise-section/FeaturedEvents/FeaturedEvents';

import ServiceSection from '../components/sections/servise-section/ServiceSection';
import BookedPrivateRoute from './PrivateRoute/BookedPrivateRoute';

const Home = () => {
 return (
  <div>
  
 <div className='my-10'>
 <Banner></Banner>
 </div>
 <div className='w-[90%] mx-auto'>
  <ServiceSection></ServiceSection>
  </div>
  <div>
  <FeaturedEvents></FeaturedEvents>
  </div>
  <div>
  <Client></Client>
  </div>

  </div>
 );
};

export default Home;