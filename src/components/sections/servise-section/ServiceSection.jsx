import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
const [services, setServices]  = useState([]);

useEffect(() =>{
 
 const fetchData =  async () => {
    const res = await fetch('/Fakejsondata.json')
    const data = await res.json()
    setServices(data)
 }
fetchData()
},[])

 return (
<div className=""> 
  <h1 className=" text-center  text-4xl text-black font-semibold my-10">Our Services</h1>
<div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
{
  services?.map((service) =><ServiceCard key={service.id} service={service}></ServiceCard>)
}
</div>
</div>
 );
};

export default ServiceSection;