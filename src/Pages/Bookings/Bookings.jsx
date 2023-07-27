import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingsData from "./BookingsData";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  // console.log(bookings);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "booking service has been deleted.",
                "success"
              );
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify({status: 'confirm'})
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = 'confirm';
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-slate-400 text-black font-bold">
              <th></th>
              <th>Service & date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsData
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingsData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
