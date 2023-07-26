import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const[bookings, setBookings] = useState([]);
  console.log(bookings);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
    .then(res=> res.json())
    .then(data=>setBookings(data))
  }, []);
  return (
    <div>
      <h3>here you can see booking table! {bookings.length}</h3>
    </div>
  );
};

export default Bookings;
