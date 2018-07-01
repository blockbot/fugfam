import { LOAD_APP } from '../constants/actionTypes.js';

export const loadApp = app => ({
  type: LOAD_APP,
  app: app
})