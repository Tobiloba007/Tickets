import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: [],
        isLoggedIn: false,
        loginToken: null,
        loading: false,
        regData: [],
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoginToken: (state, action) => {
            state.token = action.payload;
        },
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setRegData: (state, action) => {
            state.regData = action.payload;
        },
    },
});

export const { setUser, setLoginToken, setLoading, setLoggedIn, setRegData } = authSlice.actions;

export default authSlice.reducer;