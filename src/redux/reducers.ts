import { combineReducers } from "redux";

import movie from "@redux/slices/movie";
import upcoming from "@redux/slices/upcoming";
import pagination from "@redux/slices/pagination";

const rootReducer = combineReducers({ movie , upcoming,pagination });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
