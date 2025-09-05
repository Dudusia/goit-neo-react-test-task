import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const CAMPERS_ENDPOINT = 'campers';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page = 1, limit = 5 } = {}) => {
    const response = await axios.get(`/${CAMPERS_ENDPOINT}/`, {
      params: { limit: limit, page: page },
    });
    return response.data;
  }
);
