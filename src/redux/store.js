import {createStore} from 'redux'
import { expencesReducer } from './reducer'

export const store = createStore(expencesReducer)