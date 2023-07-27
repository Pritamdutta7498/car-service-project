import React from "react";

const BookingsData = ({ booking, handleDelete,handleBookingConfirm }) => {
  const { customerName, img, price, date, email, service, service_id, _id, status } =
    booking;


  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle btn-outline "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-md w-28 ">
              <img src={img} alt="Service img" />
            </div>
          </div>
          <div>
            <h2 className="font-bold">{service}</h2>
            <div className="text-sm opacity-50">{date}</div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{price}</td>
      <th>
        { status == 'confirm' ? <button className="btn btn-sm btn-success shadow-md" >Confirmed</button> :
          <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-error btn-sm shadow-md" title="Please confirm your service order!">Please confirm</button>}
      </th>
    </tr>
  );
};

export default BookingsData;
