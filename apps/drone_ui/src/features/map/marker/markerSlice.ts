import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { calculatePolygonArea } from '../utils';
import { MarkersState, MarkerType, UpdatedPosition } from './types';


const initialState: MarkersState = {
    markersList: [],
};

const markerSlice = createSlice({
    name: 'markers',
    initialState,
    reducers: {
        addMarker: (state, action: PayloadAction<MarkerType>) => {
            state.markersList.push(action.payload);
            ;
        },
        removeMarker: (state, action: PayloadAction<number>) => {
            state.markersList = state.markersList.filter((_, index) => index !== action.payload);
        },
        updateMarkerPosition: (state, action: PayloadAction<UpdatedPosition>) => {
            const { index, newPosition } = action.payload;

            state.markersList[index] = [newPosition.lat, newPosition.lng];
            state.markersList[index] = [newPosition.lat, newPosition.lng];
        }

    },
});

export const { addMarker, removeMarker, updateMarkerPosition } = markerSlice.actions;
export const markerAreaSelector = createSelector(
    (state: RootState) => state.markers.markersList,
    (markers: MarkerType[]) => calculatePolygonArea(markers)
);

export default markerSlice.reducer;
