const GET_MISSIONS = 'missionStore/missions/GET_MISSIONS';

const missionURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const getMissionAction = (payload) => ({
  type: GET_MISSIONS,
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
    };
    return obj;
  });
  dispatch(getMissionAction(arrangeMissions));
};

const missions = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];

    default:
      return state;
  }
};

export default missions;
