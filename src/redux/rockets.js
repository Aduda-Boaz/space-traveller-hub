const GET_ROCKET = 'applicationStore/rocketReducer/GET_ROCKET';
const RESERVE_ROCKET = 'applicationStore/rocketReducer/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'applicationStore/rocketReducer/CANCEL_RESERVATION';

const rocketURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const getRocketAction = (payload) => ({
  type: GET_ROCKET,
  payload,
});

export const reserveRocketAction = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelReserveAction = (payload) => ({
  type: CANCEL_RESERVATION,
  payload,
});

export const getRocketAPI = () => async (dispatch) => {
  const response = await fetch(rocketURL);
  const rockets = await response.json();
  const arrangeRockets = rockets.map((e) => {
    const obj = {
      id: e.id,
      rocketName: e.rocket_name,
      description: e.description,
      flickrImages: e.flickr_images,
      reserved: false,
    };
    return obj;
  });
  dispatch(getRocketAction(arrangeRockets));
};

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET:
      return ([...action.payload]);

    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });

    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });

    default:
      return state;
  }
};

export default rockets;
