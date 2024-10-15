import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './features/navigation/navigationSlice' // Upewnij się, że ścieżka jest poprawna

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch