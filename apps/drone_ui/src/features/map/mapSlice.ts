import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

// Typ dla wyników wyszukiwania
interface LocationState {
    coordinates: [number, number] | null; // Współrzędne [lat, lng]
    status: 'idle' | 'loading' | 'failed';
}

const initialState: LocationState = {
    coordinates: null,
    status: 'idle',
};

// Thunk do wyszukiwania lokalizacji asynchronicznie
export const searchLocation = createAsyncThunk(
    'location/search',
    async (query: string, thunkAPI) => {
        const provider = new OpenStreetMapProvider();
        const results = await provider.search({ query });
        if (results.length > 0) {
            const { x, y } = results[0];
            return { lat: y, lng: x };
        } else {
            throw new Error('No results found');
        }
    }
);

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        resetLocation: (state) => {
            state.coordinates = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchLocation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchLocation.fulfilled, (state, action: PayloadAction<{ lat: number; lng: number }>) => {
                state.coordinates = [action.payload.lat, action.payload.lng];
                state.status = 'idle';
            })
            .addCase(searchLocation.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { resetLocation } = locationSlice.actions;
export default locationSlice.reducer;
