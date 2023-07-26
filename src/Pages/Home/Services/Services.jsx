import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [ services, setServices] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div className="my-5">
            <div className="text-center space-y-2">
                <h4 className="text-2xl font-bold text-orange-500">Our services</h4>
                <h2 className="text-4xl font-bold">Our Services Area</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Consequatur modi esse quod. <br /> Veniam expedita consequuntur, magnam quisquam fuga velit mollitia facilis cum eos unde porro facere!</p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;