
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {
  const{_id,title, img, price} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-zinc-950">{title}</h2>
        <p className="font-bold text-orange-500">Price: ${price}</p>
        <div className="flex justify-between items-center">
          <Link to={`/book/${_id}`}>
          <button className="btn btn-primary">Book Now</button>

          </Link>          
          <button className="font-bold text-4xl text-orange-500" title="button is not working!"><HiOutlineArrowRightCircle /></button>

        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
