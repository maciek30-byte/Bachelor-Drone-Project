import { FormField } from "../../../componentsUtils/FormField";
import React, { useState, ChangeEvent } from 'react';
import { AREA_KEYS } from '../../../../Mocks/AreaMock';
import { useDispatch } from 'react-redux';
import { addMission } from '../../../features/mision/misionSlice';
import { useNavigate } from 'react-router-dom';
//@TODO Refactor that form component, add validation to it//

interface FormData {
    missionName: string;
    missionArea: string;
    decision: string;
    missionDuration: string;
    eventType: string;
    numberOfDrones: string;
    droneModels: string;
}

export const CreateMissionForm = () => {
    const [formData, setFormData] = useState<FormData>({
        missionName: '',
        missionArea: '',
        decision: '',
        missionDuration: '',
        eventType: '',
        numberOfDrones: '',
        droneModels: '',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addMission(formData));
        navigate('/dashboard');
    };



    return (
        <form onSubmit={handleSubmit}>
            <FormField label="Mission Name" type="text" value={formData.missionName} onChange={handleInputChange} />
            <FormField label="Mission Area (Coordinates)" type="select" value={formData.missionArea} onChange={handleInputChange} options={AREA_KEYS} />
            <FormField label="Decision" type="select" options={['Approve', 'RejKILect']} value={formData.decision} onChange={handleInputChange} />
            <FormField label="Mission Duration (hours)" type="number" value={formData.missionDuration} onChange={handleInputChange} />
            <FormField label="Event Type" type="select" options={['Human', 'AI']} value={formData.eventType} onChange={handleInputChange} />
            <FormField label="Number of Drones" type="number" value={formData.numberOfDrones} onChange={handleInputChange} />
            <FormField label="Drone Models" type="text" value={formData.droneModels} onChange={handleInputChange} />
            <button className="bg-green-500 text-white px-4 py-2 rounded-md" type="submit">Create Mission</button>
        </form>
    )
}
