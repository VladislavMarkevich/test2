import {combineReducers} from "redux";

import URLReducers from "kernel/url/reducers";
import JogsReducers from "pages/Jogs/reducers";

const combine = combineReducers({
  URL: URLReducers,
  jogs: JogsReducers
});

export default combine;
