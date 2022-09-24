import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './slice/ui'

export const store = configureStore({
  reducer: { ui: uiSlice.reducer }
})
