import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Initial state of the user slice
const initialState = {
  user: [],  
  Loggedin: null, 
  LoggedinUserData: []  
};

// Create a slice for user-related actions and state management
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Register a new user
    Register: (state, action) => {
      const { firstname, lastname, email, password } = action.payload;

      // Create a new user object
      const newUser = {
        id: state.user.length + 1,
        firstname,
        lastname,
        email,
        password,
        cart: [],
        address: []
      };

      // Add the new user to the state
      state.user.push(newUser);
      state.Loggedin = email;  
    },

    // Log in an existing user
    Login: (state, action) => {
      const { email, password } = action.payload;
      const userForLogin = state.user.find(
        (user) => user.email === email && user.password === password
      );

      if (userForLogin) {
        state.Loggedin = email;  
      } else {
        toast.error("User not Found, Register First!")
      }
    },

    // Add an item to the logged-in user's cart
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
      }
    },

    // Add an address to the logged-in user's profile
    addAddress: (state, action) => {
      const userForAddress = state.user.find(
        (user) => user.email === state.Loggedin
      );

      if (userForAddress) {
        userForAddress.address.push(action.payload);  
        toast.success("Address saved");
      } else {
        toast.warn("No user found for adding address");
      }
    },

    // Update the quantity of a product in the cart
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

    // Remove an item from the cart
    removeFromCart: (state, action) => {
      const user = state.user.find((user) => user.email === state.Loggedin);
      if (user) {
        user.cart = user.cart.filter((item) => item.id !== action.payload);  
      }
    },

    // Clear all items from the cart
    clearcart: (state) => {
      const user = state.user.find((user) => user.email === state.Loggedin);
      if (user) { 
        user.cart = [];  
      }
    },

    // Log out the current user
    logout: (state) => {
      state.Loggedin = null;
    },
  },
});

// Export actions and reducer
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