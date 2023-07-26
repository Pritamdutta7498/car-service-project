import { useLoaderData } from "react-router-dom";
import picture from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const {_id,  title,  price } = service;
  const {user} = useContext(AuthContext);

  const handleCheckout = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const amount = price;

    const order = {
      customerName: name,
      email,
      date,
      price: price,
      service : _id,

    }
    console.log(order);

    // console.log(name, email, date, amount);
  }



  return (
    <div className="my-5">
      <div className="relative">
      <img src={picture} className="text-center mx-auto " alt="" />
      <h2 className="absolute text-3xl p-5 bg-yellow-100 font-semibold rounded-lg drop-shadow-2xl top-32 left-40">Checkout</h2>
      </div>
      <div>
        <h3 className="text-3xl font-bold bg-slate-700 p-5 text-center w-2/3 mx-auto rounded-lg my-5 text-white shadow-amber-400 shadow-lg">
          Book Service: [ <span className="text-error p-1 ">{title}</span> ]
        </h3>

        <form onSubmit={handleCheckout}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                placeholder="price"
                defaultValue={'$ ' + price}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="bg-error hover:btn-success btn btn-block font-bold"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
