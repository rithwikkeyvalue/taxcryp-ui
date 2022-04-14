import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2' }),
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true
});

export default baseApi;
