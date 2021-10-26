import axios from 'axios';
import START_API_CALL from './startCall';

const api =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (START_API_CALL.type !== action.type) return next(action);
    next(action);

    const { url, onStart, onSuccess, onError } = action.payload;

    if (onStart) {
      dispatch({ type: onStart });
    }

    try {
      const { data } = await axios({
        url,
        method: 'get',
      });

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: data });
      }
    } catch (error) {
      if (onError) {
        dispatch({ type: onError, payload: error.message });
      }
    }
  };

export default api;
