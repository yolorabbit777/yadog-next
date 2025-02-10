import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isLoggedIn: boolean;
    loginInfo: any;
}

const initialState: AuthState = { isLoggedIn: false, loginInfo: null };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.loginInfo = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.loginInfo = null;
        },
        phoneLogin: (state, action) => {
            state.isLoggedIn = true;
            state.loginInfo = action.payload;
        },
    },
});

export const { login, logout, phoneLogin } = authSlice.actions;
export default authSlice.reducer;
