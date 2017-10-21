import * as vehicle from '../actions/VehicleAction';

export interface VehicleState {
  lights: {
    left: boolean;
    right: boolean;
  };
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
  voltage: number;
};

export const initialState: VehicleState = {
  lights: {
    left: true,
    right: false
  },
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  speed: 0,
  voltage: 0
};

export function reducer (state = initialState, action: vehicle.VehicleAction): VehicleState {
  switch (action.type) {
    case vehicle.VEHICLE_UPDATE:
      return Object.assign({}, state, {
        position: [action.payload[0], action.payload[1], action.payload[2]],
        rotation: [action.payload[3], action.payload[4], action.payload[5]]
      });
    default:
      return state;
  }
};
