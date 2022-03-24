const GET_MISSIONS = 'missionStore/missions/GET_MISSIONS';
const JOIN_MISSION = 'missionStore/missions/JOIN_MISSION';
const LEAVE_MISSION = 'missionStore/missions/LEAVE_MISSION';

const missionURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const getMissionAction = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const getMissionAPI = () => async (dispatch) => {
  const response = await fetch(missionURL);
  const missions = await response.json();
  const arrangeMissions = missions.map((e) => {
    const obj = {
      mission_id: e.mission_id,
      mission_name: e.mission_name,
      description: e.description,
      reserved: false,
    };
    return obj;
  });
  dispatch(getMissionAction(arrangeMissions));
};

const missions = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });

    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });

    default:
      return state;
  }
};

export default missions;
