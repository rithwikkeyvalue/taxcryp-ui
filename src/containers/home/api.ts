import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: builder => ({
    getBase: builder.query<any, void>({
      query: () => '/'
    })
  })
});

export const { useGetBaseQuery } = baseApi;
