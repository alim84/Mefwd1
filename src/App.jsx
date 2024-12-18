import Login from "./component/Login";
import Signup from "./component/Signup";
import AddEnhance from "./Pages/AddEnhance";
import BestSellingProducts from "./Pages/BestSellingProducts";
import Category from "./Pages/Category";
import Footer from "./Pages/Footer";
import Heropart from "./Pages/Heropart";
import Nabbar from "./Pages/Nabbar";
import NewArrival from "./Pages/NewArrival";
import OurProducts from "./Pages/OurProducts";
import ServiceDelevary from "./Pages/ServiceDelevary";
import Today from "./Pages/Today";
import Wishlist from "./component/Wishlist";
import Cart from "./component/Cart";

const App = () => {
  return (
    <>
      <div>
       
        <Nabbar />
        <Heropart />
        <Today />
        <Category />
        <BestSellingProducts />
        <AddEnhance />
        <OurProducts />
        <NewArrival />
        <ServiceDelevary />
        <Footer />
        <Signup />
        <Login />
        <Wishlist/>
        <Cart/>
      </div>
    </>
  );
};

export default App;
