import Header  from "./components/Header";
import { Pagination } from "./components/Pagination";
import { Blog } from "./components/Blog";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";
export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[]);
  return(
    <div className="w-11/12 h-full flex flex-col items-center bg-slate-100 ">
      <Header/>
      <Blog/>
      <Pagination/>

    </div>
  );
}
