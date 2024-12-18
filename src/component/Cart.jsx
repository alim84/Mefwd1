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
          <div>Product</div>

          <div> Price </div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
