import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      const newValue = action.payload
      return {
        ...state,
        loading: newValue
      }
    }
  }
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice
