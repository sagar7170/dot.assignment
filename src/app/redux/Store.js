
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./Slice";

export const reduxstore = configureStore({
         reducer:todoReducer 
})


