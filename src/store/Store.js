import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './HomeDataStore/homeStore';
import userReducer from './UserStore/UserStore';
import newsDetailsReducer from './NewsDetailsStore/NewsDetailsStore';
import  testimonialsSlice  from './TestimonialsStore/TestimonialsStore';

export default configureStore({
    reducer: {
        home: homeReducer,
        user: userReducer,
        newsDetails: newsDetailsReducer,
        testimonials: testimonialsSlice
    }
})