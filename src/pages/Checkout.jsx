/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { addAddress, removeFromCart, updateQuantity } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Checkout() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  console.log(user);

  const loggedinuser = useSelector((state) => state.user.Loggedin);
  console.log(loggedinuser);

  const loggedinuserdata = user.find((user) => user.email === loggedinuser);
  console.log(loggedinuserdata);

  const cartitems = loggedinuserdata.cart;
  console.log(cartitems);

  const increaseQuantity = (id) => {
    const product = cartitems.find((item) => id === item.id);
    if (product) {
      const newQuantity = product.quantity + 1;
      dispatch(updateQuantity({ productId: id, newQuantity }));
    }
  };

  const descreaseQuantity = (id) => {
    const product = cartitems.find((item) => id === item.id);
    if (product) {
      const newQuantity = product.quantity - 1;
      dispatch(updateQuantity({ productId: id, newQuantity }));
    }
  };

  const RemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateCartPrice = () => {
    const totalprice = cartitems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace(/,/g, ""));
      return total + itemPrice * item.quantity;
    }, 0);
    console.log(totalprice);
    console.log(cartitems);
    return totalprice;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "",
      firstname: "",
      lastname: "",
      address: "",
      apartment: "",
      postalcode: "",
      city: "",
      cardnumber: "",
      exprirationdata: "",
      securitycode: "",
      nameoncard: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(addAddress({firstname: data.firstname, lastname: data.lastname, address: data.address, apartment: data.apartment, aptno: data.apartment, postalcode: data.postalcode, city: data.city}));
    console.log("submited data", data)
  };
  return (
    <>
      <Header />
      <SubHeader />
      <div className="main-wrapper w-full min-h-screen flex max-md:flex-col">
        <div className="form-wrapper w-[60vw] h-full p-3 max-md:w-full">
          <div className="account flex flex-col p-5 border-b-2">
            <span className="text-[1.2vw] text-[#636363] max-md:text-[3vw]">Account</span>
            <span className="text-[1.5vw] max-md:text-[3vw]">johndoe@gmail.com</span>
          </div>
          <div className="Delivery p-5">
            <h1 className="text-[2vw] font-bold">Delivery</h1>
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="ForCountry">
                <input
                  type="text"
                  className="text-[1.3vw border-[#9BA3AF] border-[1px] p-2 w-full rounded-md max-md:text-[1.5vw] max-md:p-2 max-sm:text-[2vw]"
                  placeholder="Country/Region"
                  {...register("country", {
                    required: "Country/Region Required...",
                  })}
                />
                <p className="text-sm sm:text-[1vw] text-red-500">
                  {errors.country?.message}
                </p>
              </div>
              <div className="Name-wrapper flex gap-2 max-md:w-full">
                <div className="ForFirstname max-md:w-1/2">
                  <input
                    type="text"
                    className="text-[1.3vw border-[#9BA3AF] border-[1px] p-2  rounded-md max-md:text-[1.5vw] max-md:p-2 max-sm:text-[2vw] max-md:w-full"
                    placeholder="Firstname"
                    {...register("firstname", {
                      required: "firstname Required...",
                    })}
                  />
                  <p className="text-sm sm:text-[1vw] text-red-500">
                    {errors.firstname?.message}
                  </p>
                </div>
                <div className="ForLastname max-md:w-1/2">
                  <input
                    type="text"
                    className="text-[1.3vw border-[#9BA3AF] border-[1px] p-2 rounded-md max-md:text-[1.5vw] max-md:p-2 max-sm:text-[2vw] max-md:w-full"
                    placeholder="Lastname"
                    {...register("lastname", {
                      required: "lastname Required...",
                    })}
                  />
                  <p className="text-sm sm:text-[1vw] text-red-500">
                    {errors.lastname?.message}
                  </p>
                </div>
              </div>
              <div className="Foraddress">
                <input
                  type="text"
                  className="text-[1.3vw border-[#9BA3AF] border-[1px] p-2 w-full rounded-md max-md:text-[1.5vw] max-md:p-2 max-sm:text-[2vw] "
                  placeholder="Address"
                  {...register("address", {
                    required: "address Required...",
                  })}
                />
                <p className="text-sm sm:text-[1vw] text-red-500">
                  {errors.address?.message}
                </p>
              </div>
              <div className="Forapartment max-md:text-[1.5vw] max-md:p-2 max-sm:text-[2vw]">
                <input
                  type="text"
                  className="text-[1.3vw border-[#9BA3AF] border-[1px] p-2 w-full rounded-md"
                  placeholder="Apartment no."
                  {...register("apartment", {
                    required: "apartment Required...",
                  })}
                />
                <p className="text-sm sm:text-[1vw] text-red-500">
                  {errors.apartment?.message}
                </p>
              </div>
              <div className="postalcode-city flex gap-2 max-md:w-full">
                <div className="ForPostalcode max-md:w-1/2">
                  <input
                    type="number"
                    className="text-[1.3vw border-[#9BA3AF] border-[1px] p-2 rounded-md max-md:w-full max-md:text-[1.5vw] max-md:p-2 max-sm:text-[2vw]"
                    placeholder="Postal Code"
                    {...register("postalcode", {
                      required: "postalcode Required...",
                    })}
                  />
                  <p className="text-sm sm:text-[1vw] text-red-500">
                    {errors.postalcode?.message}
                  </p>
                </div>
                <div className="ForCity max-md:w-1/2">
                  <input
                    type="text"
                    className="text-[1.3vw border-[#9BA3AF] border-[1px] p-2 rounded-md max-md:w-full max-md:text-[1.5vw] max-md:p-2 max-sm:text-[2vw]"
                    placeholder="City"
                    {...register("city", {
                      required: "City Required...",
                    })}
                  />
                  <p className="text-sm sm:text-[1vw] text-red-500">
                    {errors.city?.message}
                  </p>
                </div>
              </div>

              <div className="payment-method">
                <div className="creadit-cart">
                  <div className="heading-wrapper w-[90%] flex justify-between">
                    <span className="text-[1.8vw] font-bold">Creadit Card</span>
                    <div className="icons-wrapper flex gap-1">
                      <img
                        src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg"
                        alt="..."
                      />
                      <img
                        src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/maestro.ByfUQi1c.svg"
                        alt="..."
                      />
                      <img
                        src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMp.svg"
                        alt="..."
                      />
                      <img
                        src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy.svg"
                        alt="..."
                      />
                    </div>
                  </div>

                  <div className="payment-form-wrapper flex flex-col gap-2 mt-5">
                    <div className="ForcardNumber">
                      <input
                        type="number"
                        className="text-[1.3vw border-[#9BA3AF] border-[1px] p-2 w-full rounded-md max-md:text-[1.5vw] max-md:p-2 max-sm:text-[2vw]"
                        placeholder="Card Number"
                        {...register("cardnumber", {
                          required: "Card Number Required...",
                        })}
                      />
                      <p className="text-sm sm:text-[1vw] text-red-500">
                        {errors.cardnumber?.message}
                      </p>
                    </div>
                    <div className="mm-security-codewrapper flex gap-2 w-full">
                      <div className="Forexprirationdata w-1/2">
                        <input
                          type="date"
                          className="text-[1.3vw border-[#9BA3AF] border-[1px] p-2 w-full rounded-md max-md:text-[1.5vw] max-md:p-2 max-sm:text-[2vw]"
                          placeholder="Expriration Data"
                          {...register("exprirationdata", {
                            required: "Expriration Data Required...",
                          })}
                        />
                        <p className="text-sm sm:text-[1vw] text-red-500">
                          {errors.exprirationdata?.message}
                        </p>
                      </div>
                      <div className="Forsecuritycode w-1/2">
                        <input
                          type="number"
                          className="text-[1.3vw border-[#9BA3AF] border-[1px] p-2 w-full rounded-md max-md:text-[1.5vw] max-md:p-2 max-sm:text-[2vw]"
                          placeholder="Security Code"
                          {...register("securitycode", {
                            required: "securitycode Required...",
                          })}
                        />
                        <p className="text-sm sm:text-[1vw] text-red-500">
                          {errors.securitycode?.message}
                        </p>
                      </div>
                    </div>
                    <div className="Fornameoncard">
                      <input
                        type="text"
                        className="text-[1.3vw border-[#9BA3AF] border-[1px] p-2 w-full rounded-md max-md:text-[1.5vw] max-md:p-2 max-sm:text-[2vw]"
                        placeholder="Name on card"
                        {...register("nameoncard", {
                          required: "Card name Required...",
                        })}
                      />
                      <p className="text-sm sm:text-[1vw] text-red-500">
                        {errors.securitycode?.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-btn-wrapper">
                <button
                  className="text-white bg-black p-2 rounded-md w-full"
                  type="submit"
                >
                  Review Order
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="price-checkout w-full md:w-[40vw] h-full p-2">
          <div className="carted-item-wrapper w-full h-[30vw] overflow-y-scroll">
            <div className="cart-wrapper w-full flex flex-col items-center p-2">
              {cartitems.length > 0 ? (
                cartitems.map((items, index) => (
                  <div
                    key={index}
                    className="cart w-full h-[25vw] md:h-[15vw] border-black border-b-[1px] flex items-center p-2"
                  >
                    <div className="image-wrapper w-[40vw] md:w-[30vw] h-full flex justify-center items-center">
                      <img
                        className="w-full h-full object-contain"
                        src={items.image}
                        alt="..."
                      />
                    </div>
                    <div className="product-info-wrapper flex flex-col w-[50vw] md:w-[40vw]">
                      <span className="text-[3vw] md:text-[1vw]">
                        {items.name}
                      </span>
                      <span className="text-[3vw] md:text-[1vw]">
                        {items.category}
                      </span>
                      <span className="text-[3.5vw] md:text-[1.3vw] font-bold">
                        ₹ {items.price}
                      </span>
                    </div>
                    <div className="quantity-button-wrapper flex items-center gap-2 md:gap-5 w-[30vw] md:w-[20vw]">
                      <button
                        onClick={() => descreaseQuantity(items.id)}
                        className="p-2 md:p-3 text-[3vw] md:text-[1vw]"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <span className="text-[3vw] md:text-[1.2vw]">
                        {items.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(items.id)}
                        className="p-2 md:p-3 text-[3vw] md:text-[1vw]"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <div className="remove-product-container w-[15vw] md:w-[10vw]">
                      <button onClick={() => RemoveFromCart(items.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          color={"#000000"}
                          fill={"none"}
                        >
                          <path
                            d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M9.5 16.5L9.5 10.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M14.5 16.5L14.5 10.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <span>No products are available</span>
              )}
            </div>
            <div className="totolwrapper flex justify-center">
            <div className="total-wrapper flex gap-2">
              <span>Total :</span>
              <h1 className="font-bold">₹ {calculateCartPrice()}</h1>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
