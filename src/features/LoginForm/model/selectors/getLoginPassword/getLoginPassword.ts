import {StateSchema} from "app/store/types";

export const getLoginPassword = (state:StateSchema) => state?.login?.password || '';
