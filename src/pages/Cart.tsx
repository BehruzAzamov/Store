import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b py-2">
              <img src={item.images} alt={item.name} className="w-20 h-20 object-cover mr-4" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>{item.description}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="btn btn-outline btn-primary"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-outline btn-primary"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger ml-4"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
