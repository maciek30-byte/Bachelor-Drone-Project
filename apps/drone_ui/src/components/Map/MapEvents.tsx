import { useMapEvents } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { addMarker } from '../../features/map/marker/markerSlice';


export const MapEvents = (): React.ReactNode => {
    const dispatch = useDispatch();
    useMapEvents({
        click: (e) => {
            const { lat, lng } = e.latlng;
            dispatch(addMarker([lat, lng]));
        },
    });

    return null;
};