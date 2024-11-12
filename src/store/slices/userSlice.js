import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  Loggedin: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Register: (state, action) => {
      const { firstname, lastname, email, password, address } = action.payload;

      const newUser = {
        id: state.user.length + 1,
        firstname,
        lastname,
        email,
        password,
        address,
        cart: [],
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
        console.log("userforcart", userForCart);

        if (userForCart) {
            userForCart.cart.push(action.payload);
            console.log("pushed")
        }       
    },

    logout: (state) => {
      state.Loggedin = null;
    },
  },
});

export const { Register, Login, logout, addToCart } = userSlice.actions;
export default userSlice.reducer;
