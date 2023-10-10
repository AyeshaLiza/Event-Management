import PropTypes from 'prop-types'; 
import ServiceDetail from './ServiceDetail';
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
  
 const {id, price, eventName, image, shortDescription, detailDescription, button} = service || {};
 

 return (
  <div data-aos="fade-left">
      <div className="card w-96  bg-base-100  shadow-xl" >
  <figure><img className='h-[260px]' src={image} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-violet-900">{eventName}</h2>
    <p className='text-violet-600'>{shortDescription}</p>
    <div className="card-actions flex justify-end">
      <p className='text-violet-900 font-medium text-xl'>{price}</p>
     <Link to={`/card/${id}`}>
     <button onClick={(handleViewMore) =><ServiceDetail detail ={service}></ServiceDetail>} className="btn btn-outline btn-neutral text-violet-900 font-bold">{button}</button></Link>
    </div>
  </div>
</div>
  </div>
 );
};

ServiceCard.propTypes ={
 service: PropTypes.object,
}
export default ServiceCard;