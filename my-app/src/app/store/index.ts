import { configureStore } from '@reduxjs/toolkit'
import { countSlice } from '@/app/store/count-slice';


// config the store
const store= configureStore({
  reducer: {
    count: countSlice.reducer
  }
})

// export default the store
export default store

