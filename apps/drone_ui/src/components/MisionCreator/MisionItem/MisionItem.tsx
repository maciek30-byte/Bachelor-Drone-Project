import React from 'react';
import { MarkerType } from '../../features/map/marker/types';



interface MissionItemProps {
    missionName: string;
    missionArea: MarkerType;
    decision: string;
    missionDuration: string;
    eventType: string;
    numberOfDrones: string;
    droneModels: string;
}

export const MissionItem: React.FC<MissionItemProps> = ({
    missionName,
    missionArea,
    decision,
    missionDuration,
    eventType,
    numberOfDrones,
    droneModels,
}) => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 mb-4 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-indigo-600">{missionName}</h2>

            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-2">
                    <div>
                        <p className="font-semibold text-gray-700">Mission Area:</p>
                        <p className="text-sm text-gray-600">Lat: {missionArea.lat.toFixed(6)}, Lng: {missionArea.lng.toFixed(6)}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">

                    <div>
                        <p className="font-semibold text-gray-700">Mission Duration:</p>
                        <p className="text-sm text-gray-600">{missionDuration} hours</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">

                    <div>
                        <p className="font-semibold text-gray-700">Event Type:</p>
                        <p className="text-sm text-gray-600">{eventType}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">

                    <div>
                        <p className="font-semibold text-gray-700">Drones:</p>
                        <p className="text-sm text-gray-600">{numberOfDrones} ({droneModels})</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Decision: <span className={`font-semibold ${decision === 'Approve' ? 'text-green-600' : 'text-red-600'}`}>{decision}</span></p>
            </div>
        </div>
    );
};