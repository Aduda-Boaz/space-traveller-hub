const GET_ROCKET = 'applicationStore/rocketReducer/GET_ROCKET';
const rocketURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const getRocketAction = (payload) => ({
  type: GET_ROCKET,
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
    };
    return obj;
  });
  dispatch(getRocketAction(arrangeRockets));
};

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET:
      return ([...action.payload]);
    default:
      return state;
  }
};

export default rockets;
