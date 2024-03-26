import axios from 'axios';

export const API_URL = 'http://localhost:3000';

export const getEvents = () => axios.get(`${API_URL}/events`);

export const createEvent = (eventData) => axios.post(`${API_URL}/events`, eventData);
