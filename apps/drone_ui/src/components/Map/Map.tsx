import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector, useDispatch } from 'react-redux';
import { MapEvents } from './MapEvents';
import { RootState } from '../../app/store';
import { markerAreaSelector, removeMarker, updateMarkerPosition } from '../../features/map/marker/markerSlice';
import { Polygon } from 'react-leaflet';
import { selectMissionAreaCoordinates } from '../../features/mision/misionSlice';
import { MarkerType } from './MarkersList';

//@TODO refactor to get type consistency especialy with the Marker type
const temporaryPosition = [50.07067783481583, 19.99104153339751] satisfies MarkerType;
export const Map = () => {
    const markers = useSelector((state: RootState) => state.markers.markersList);
    const missionAreaCoordinates = useSelector(selectMissionAreaCoordinates);
    console.log("this is my cordinates now", missionAreaCoordinates);

    const polygonArea = useSelector(markerAreaSelector);
    const dispatch = useDispatch();

    const handleRemoveMarker = (index: number) => {
        dispatch(removeMarker(index));
    };

    console.log(polygonArea);


    return (
        <div className="w-full h-full">
            <MapContainer
                center={missionAreaCoordinates ?? temporaryPosition}
                zoom={16}
                scrollWheelZoom={false}
                className="w-full h-full"
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {markers.map((marker: [number, number], index: number) => (
                    <Marker
                        key={index}
                        position={marker}
                        draggable={true}
                        eventHandlers={{
                            click: () => handleRemoveMarker(index),
                            dragend: (e) => {
                                const newPosition = e.target.getLatLng();
                                dispatch(updateMarkerPosition({
                                    index: index,
                                    newPosition: { lat: newPosition.lat, lng: newPosition.lng }
                                }));
                            }

                        }} />
                ))}

                <Polyline positions={markers} color="red" />
                {markers.length >= 3 && <Polygon positions={markers} color="blue" />}
                <MapEvents />
            </MapContainer>
        </div>
    );
};
