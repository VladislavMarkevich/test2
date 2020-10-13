import {combineReducers} from "redux";

import URLReducers from "kernel/url/reducers";

const combine = combineReducers({
  URL: URLReducers
});

export default combine;
