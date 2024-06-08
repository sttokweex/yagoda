import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, SearchProductParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchProducts = createAsyncThunk<Product[], SearchProductParams>(
  'product/fetchProductsStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Product[]>(`https://664cc7fbede9a2b556519a1f.mockapi.io/items`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 12,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });

    return data;
  },
);
