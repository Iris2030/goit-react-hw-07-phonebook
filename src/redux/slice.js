import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'



export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62624e44d5bd12ff1e7b1114.mockapi.io/api/v1' }),
    endpoints: (builder) => ({
      fetchContacts: builder.query({
        query: () => `/contacts`,
      }),
    }),
  })
  

  export const {useFetchContactsQuery} = contactsApi
  // console.log(useFetchContactsQuery);