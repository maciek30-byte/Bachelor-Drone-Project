import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ActiveComponentType = 'Dashboard' | 'Drones' | 'Missions' | 'Settings';

interface NavigationState {
  activeComponent: ActiveComponentType;
}

const initialState: NavigationState = {
  activeComponent: 'Dashboard',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveComponent: (state, action: PayloadAction<ActiveComponentType>) => {
      state.activeComponent = action.payload;
    },
  },
});

export const { setActiveComponent } = navigationSlice.actions;
export default navigationSlice.reducer;