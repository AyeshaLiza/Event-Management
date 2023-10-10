import venue from '../../assets/venue.jpg'
import venue2 from '../../assets/venue2.jpg'
import venue3 from '../../assets/venue3.jpg'
import venue4 from '../../assets/venue4.jpg'


const BookedPrivateRoute = () => {
 return (
 <div className='w-[90%] mx-auto my-5'>

      <div className="card lg:card-side bg-violet-300 shadow-xl">
  <figure><img src={venue}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-violet-900 font-semibold ">Global Scholars Alliance</h2>
    <p className='max-w-md'>
At the Global Scholars Alliance, we believe in the transformative power of education. 
We are a diverse community of intellectuals, researchers, and educators from around the world, united in our pursuit of knowledge and understanding. Through collaborative research, innovative teaching methods, and cultural exchange, we aim to create a global impact. 
 

    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">This venue is Booked</button>
    </div>
  </div>
</div>

      <div className="card lg:card-side bg-violet-300 shadow-xl">
  <figure><img src={venue2}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-violet-900 font-semibold ">Universal Education Nexus</h2>
    <p className='max-w-md'>
    The Universal Education Nexus is more than an institution; its a vibrant ecosystem where the boundaries of traditional education dissolve. Here, learners and educators from every corner of the globe converge to explore, learn, and innovate. We are a nexus of ideas, cultures, and expertise, providing a universal platform for holistic education. Our focus is not just on imparting knowledge but also on nurturing creativity, critical thinking, and global citizenship.
 

    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">This venue is Booked</button>
    </div>
  </div>
</div>

      <div className="card lg:card-side bg-violet-300 shadow-xl">
  <figure><img src={venue4}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-violet-900 font-semibold ">Kids Summer Camp Venue</h2>
    <p className='max-w-md'>
At the Global Scholars Alliance, we believe in the transformative power of education. 
We are a diverse community of intellectuals, researchers, and educators from around the world, united in our pursuit of knowledge and understanding. Through collaborative research, innovative teaching methods, and cultural exchange, we aim to create a global impact. 
 

    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">This venue is Booked</button>
    </div>
  </div>
</div>
      <div className="card lg:card-side bg-violet-300 shadow-xl">
  <figure><img src={venue3}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-violet-900 font-semibold ">Cross-Cultural Learning Institute</h2>
    <p className='max-w-md'>
At the Global Scholars Alliance, we believe in the transformative power of education. 
We are a diverse community of intellectuals, researchers, and educators from around the world, united in our pursuit of knowledge and understanding. Through collaborative research, innovative teaching methods, and cultural exchange, we aim to create a global impact. 
 

    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">This venue is Booked</button>
    </div>
  </div>
</div>
 </div>
  );
};

export default BookedPrivateRoute;