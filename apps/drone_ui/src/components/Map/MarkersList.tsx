import { Marker } from 'react-leaflet';
export type MarkerType = [number, number]

//@TODO get type from there//

export const MarkersList = (markers: MarkerType[]) => {
    return (
        <>
            {markers.map((position, index) => (
                <Marker key={index} position={position} />
            ))}
        </>
    );
};
