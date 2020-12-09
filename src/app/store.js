import { configureStore } from '@reduxjs/toolkit'


import markersReducer from '../components/googlemap/markersSlice'
import userReducer from '../components/modals/usersSlice'
export default configureStore({
    reducer: {
        markers:markersReducer,
        user:userReducer
    },
})
