import {StateSchema} from "app/store/types";

export const getLoginEmail = (state:StateSchema) => state?.login?.email || '';
