import { configureStore } from '@reduxjs/toolkit';
import markerReducer from '../features/map/marker/markerSlice';
import missionReducer from '../features/mision/misionSlice';
export const store = configureStore({
    reducer: {
        markers: markerReducer,
        mission: missionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;