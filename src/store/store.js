import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/userinfo/user'
import friendsReducer from '../features/friends/friends'
import viewReducer from '../features/viewprofile/view'
const store=configureStore({
    reducer:{
        user:userReducer,
        friends:friendsReducer,
        view:viewReducer
    }
})
export default store;