import { createSlice } from '@reduxjs/toolkit'

interface LoadingState {
  loading: boolean
}

const initialState: LoadingState = {
  loading: false
}

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: state => {
      state.loading = true
    },
    hideLoader: state => {
      state.loading = false
    }

  }
})

export const { hideLoader, showLoader } = loaderSlice.actions

export default loaderSlice.reducer
