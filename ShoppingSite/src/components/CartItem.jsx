
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col mb-5 p-5 ml-[100px] ">

      <div className="flex flex-col border-b-2 border-blue-800 w-[550px] " >

        <div className="">
          <img src={item.image} alt="img1" 
          className="h-[250px] w-[250px] mx-auto object-contain" />
        </div>

        <div className="flex flex-col gap-y-4 p-4">
          <h1 className="mx-auto text-2xl text-gray-700 font-semibold mb-2">{item.title}</h1>
          <h1 className="text-slate-600 mb-3">{item.description}</h1>
          <div className="flex justify-between">
            <p className="text-green-500 text-xl font-bold">${item.price}</p>
            <div className="flex gap-x-3 items-center cursor-pointer text-red-600 font-bold hover:scale-105 transition-all duration-300"
            onClick={removeFromCart}>
              Remove
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
