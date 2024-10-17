import * as turf from '@turf/turf';

//@TODO do it in pipe//

export const calculatePolygonArea = (points: [number, number][]): number => {
    if (points.length < 3) return 0;

    /**
     * Ensures the first point is duplicated and added as the last point to close the polygon.
     * This is necessary to avoid errors in turf.js when calculating the polygon area.
     */

    const closedPoints = [...points, points[0]];


    const polygon = turf.polygon([closedPoints]);

    const areaInMeters = turf.area(polygon);


    const areaInKilometers = areaInMeters / 1_000_000;

    const roundedArea = Math.round(areaInKilometers * 100) / 100;

    return roundedArea;
};
