import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  Loggedin: null,
  LoggedinUserData: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Register: (state, action) => {
      const { firstname, lastname, email, password } = action.payload;

      const newUser = {
        id: state.user.length + 1,
        firstname,
        lastname,
        email,
        password,
        cart: [],
        address: [],
      };

      state.user.push(newUser);
      state.Loggedin = email;
      console.log("All Registered Users:", state.user);
    },

    Login: (state, action) => {
      const { email, password } = action.payload;
      const userForLogin = state.user.find(
        (user) => user.email === email && user.password === password
      );

      if (userForLogin) {
        state.Loggedin = email;
        console.log("User logged in:", email);
      } else {
        console.log("User not found!");
      }
    },

    addToCart: (state, action) => {
      const userForCart = state.user.find(
        (user) => user.email === state.Loggedin
      );
    
      if (userForCart) {
        const alreadyAvailable = userForCart.cart.find(
          (item) => item.name === action.payload.name
        );
    
        if (alreadyAvailable) {
          alreadyAvailable.quantity += 1;
        } else {
          userForCart.cart.push(action.payload);
        }
    
        console.log("Cart updated:", userForCart.cart);
      }
    },

    addAddress: (state, action) => {
      console.log("Loggedin user:", state.Loggedin);
      const userForAddress = state.user.find(
        (user) => user.email === state.Loggedin
      );
      
      if (userForAddress) {
        userForAddress.address.push(action.payload);
        console.log("address saved");
      } else {
        console.log("No user found for adding address");
      }
    },

    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const user = state.user.find((user) => user.email === state.Loggedin);

      if (user) {
        const product = user.cart.find((item) => item.id === productId);
        if (product) {
          product.quantity = newQuantity;
        }
      }
    },

    removeFromCart: (state, action) => {
      const user = state.user.find((user) => user.email === state.Loggedin);
      if (user) {
        user.cart = user.cart.filter((item) => item.id !== action.payload);
      }
    },

    clearcart: (state) => {
      const user = state.user.find((user)=>user.email === state.Loggedin);
      if(user){
        user.cart = [];
      }
    },

    logout: (state) => {
      state.Loggedin = null;
    },
  },
});

export const {
  Register,
  Login,
  logout,
  addToCart,
  updateQuantity,
  removeFromCart,
  addAddress,
  clearcart
} = userSlice.actions;
export default userSlice.reducer;