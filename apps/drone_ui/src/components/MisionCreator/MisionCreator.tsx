import { useState } from 'react';
import { GenericList } from '../../componentsUtils/List';
import { CreateMissionForm } from './CreateMissionForm/CreateMissionForm';
import { MOCK_MISSIONS } from '../../../Mocks/MisionsMocks';
import { MissionItem } from './MisionItem/MisionItem';

export const MissionCreator = () => {
    const [isFormOpen, setIsFormOpen] = useState(false); // Zarządzanie widocznością formularza

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex-1 p-4 bg-gray-100">
                <h2 className="text-xl font-bold">Lista dostępnych misji</h2>
                <GenericList items={MOCK_MISSIONS} renderItem={({ missionName, missionArea, decision, missionDuration, eventType, numberOfDrones, droneModels }) => <MissionItem
                    missionName={missionName}
                    missionArea={missionArea}
                    decision={decision}
                    missionDuration={missionDuration}
                    eventType={eventType}
                    numberOfDrones={numberOfDrones}
                    droneModels={droneModels}
                />} />
            </div>

            <div className="p-4 border-t border-gray-300 bg-white">
                <button
                    onClick={toggleForm}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    {isFormOpen ? 'Close Creator' : 'Open Creator'}
                </button>

                {isFormOpen && (
                    <div className="mt-4">
                        <h3 className="text-lg font-bold">Utwórz nową misję</h3>
                        <CreateMissionForm />
                    </div>
                )}
            </div>
        </div>
    );
};
