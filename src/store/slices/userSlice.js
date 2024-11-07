import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],  
    Loggedin: [],
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
            state.Loggedin.push(email);
            console.log("All Registered Users:", state.user);
        },

        Login: (state, action) => {
            const { email, password } = action.payload;
            const userForLogin = state.user.find(user => user.email === email && user.password === password);
        
            if (userForLogin) {
                state.Loggedin.push(email);
                console.log("User logged in:", email);
            } else {
                console.log("User not found!");
            }
        },

        logout: (state) => {
            state.Loggedin = [];
        }
    }
});

export const { Register, Login, logout } = userSlice.actions;
export default userSlice.reducer;
