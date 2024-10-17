export type MarkerType = [number, number]

export interface MarkersState {
    markersList: MarkerType[];
}

export interface UpdatedPosition {
    index: number;
    newPosition: {
        lat: number;
        lng: number;
    };
}