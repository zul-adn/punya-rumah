import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const propertiesAPI = createApi({
  reducerPath: 'propertiesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getProperties: builder.mutation({
      query: (body) => ({
        url: '/api/properties/get',
        method: 'POST',
        body: JSON.stringify(body)
      }),
    }),
  }),
});

export const {useGetPropertiesMutation } = propertiesAPI;
