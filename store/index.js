import { configureStore } from '@reduxjs/toolkit'
import imgurSlice from './imgurSlice'

export const store = configureStore({
  reducer: {
    imgur: imgurSlice
  },
})