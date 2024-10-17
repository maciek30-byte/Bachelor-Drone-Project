import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarkerType } from '../map/marker/types';
import { AREA_MOCK } from '../../../Mocks/AreaMock';
import { RootState } from '../../app/store';


interface MissionState {
    missionName: string;
    missionArea: MarkerType;
    decision: string;
    missionDuration: string;
    eventType: string;
    numberOfDrones: string;
    droneModels: string;
}

const initialState: MissionState = {
    missionName: '',
    missionArea: AREA_MOCK.parkLotnikow,
    decision: '',
    missionDuration: '',
    eventType: '',
    numberOfDrones: '',
    droneModels: '',
};

const missionSlice = createSlice({
    name: 'mission',
    initialState,
    reducers: {
        addMission: (state, action: PayloadAction<MissionState>) => {
            return { ...state, ...action.payload };
        },
        resetMissionData: () => initialState,
    },
});

export const { addMission, resetMissionData } = missionSlice.actions;
export const selectMissionAreaCoordinates = (state: RootState): MarkerType => state.mission.missionArea;
export default missionSlice.reducer;