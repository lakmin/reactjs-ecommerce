
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Top from "../components/Top";

import Featured from "../components/Featured";
import Search from "../components/Search";
import Footer from "../components/Footer";
   


export default function NotFound() {

  // const getProducts = () => {
  //   axios.get("https://fakestoreapi.com/products").then(
  //       res => {
  //           console.log(res);
  //       }).catch(err =>
  //           {
  //               console.log(err);
  //           }
  //       ) 
  // }

  // getProducts();
  // console.log("loading");
  return (
      <div className="bg-white-500">
        <Top /> 
        <Nav />
        <div className="container mx-auto text-center min-h-48">
            <h5 className="mt-36 text-4xl">Page Not Found</h5>
        </div>
        <Featured />
        <Search />
        <Footer/>
      </div>
  );
}
