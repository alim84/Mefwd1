const Cart = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 mx-auto items-center text-xl font-mono font-bold mb-6">
          <div>Product</div>

          <div> Price </div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        <div className="grid grid-cols-4 mx-auto items-center text-xl font-mono font-bold p-">
          <div>Laptop</div>

          <div> 40000.00 </div>
          <div>01</div>
          <div>40000.00</div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div>
            <button className="px-8 py-3 border-2 border-gray-500 outline-none hover:text-[#DB4444] rounded-sm ">
              Return To Shop
            </button>
          </div>
          <div>
            <button className="px-8 py-3 border-2 border-gray-500 outline-none hover:text-[#DB4444] rounded-sm ">
              Update Cart
            </button>
          </div>
        </div>
        <div className="flex justify-between  mt-12">
          <div>
            <input
              className="px-8 py-3 rounded-md mr-6 outline-none border-2 border-blue-100"
              type="text"
              placeholder="coupon Code"
            ></input>
            <button className="px-8 py-3 text-white outline-none hover:text-[18px] bg-[#DB4444] rounded-sm ">
              Apply Coupon
            </button>
          </div>
          <div className="w-[300px]  outline-none border-2 border-gray-500 rounded-lg mb-20 ">
            <div className="m-3">
              <h4 className="text-[16px] font-mono font-bold mb-3">
                Cart Total
              </h4>
              <div className="grid grid-cols-2  items-center border-b-2 mb-6">
                <h5 className="mb-2">Subtotal</h5>
                <p className="ml-24">$200</p>
              </div>
              <div className="grid grid-cols-2  items-center border-b-2 mb-6">
                <h5 className="mb-2">Shoping</h5>
                <p className="ml-24">fee</p>
              </div>
              <div className="grid grid-cols-2  items-center border-b-2 mb-6">
                <h5 className="mb-2">Total</h5>
                <p className="ml-24">$400</p>
              </div>

              <div className="text-center">
                <button className="px-6 py-2 text-white outline-none content-center bg-[#DB4444] rounded-sm ">
                  Process to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
