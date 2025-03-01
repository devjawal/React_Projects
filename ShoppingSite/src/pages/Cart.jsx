import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="">
  {
    cart.length > 0  ? 
    (<div className="flex h-full  overflow-y-auto">


      <div className=" w-[60%] ">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="w-[40%] p-4 mt-4 border-l-2 border-blue-100 flex flex-col h-[650px]  justify-between">

        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="text-blue-900 mt-4 font-bold text-[40px] mx-auto">Your Cart</div>
          <div className="mt-5 font-bold text-blue-900 text-xl">Summary</div>
          <p className="mt-[50px]">
            <span className="text-blue-600 text-xl font-bold  ">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col border-b-2 border-r-2 border-slate-300 rounded-lg p-5 items-center justify-center mx-auto w-[100%]">
          <p className="text-2xl m-10">Total Amount: <span className="text-green-600 font-bold text-2xl">${totalAmount}</span></p>
          <button className="border bg-blue-600 text-white py-2 px-5 rounded-lg hover:scale-110 transition-all duration-300">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col bg-blue-100 justify-center items-center h-screen">
      <h1 className="text-slate-900 font-bold text-3xl mb-10">Cart Empty</h1>
      <Link to={"/"}>
        <button className="border bg-blue-600 text-white py-2 px-5 rounded-lg hover:scale-110 hover:bg-green-600 hover:text-slate-50 transition-all duration-300">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
