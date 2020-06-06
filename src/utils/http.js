import axios from 'axios'
import { END_POINTS } from './endpoints'

export const AXIOS = axios.create({
  baseURL: END_POINTS.BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
