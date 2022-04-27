import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62624e44d5bd12ff1e7b1114.mockapi.io/api/v1' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
      fetchContacts: builder.query({
        query: () => `/contacts`,
        providesTags:['Contacts'],
      }),
      deleteContact: builder.mutation({
        query: (contactID) => ({
            url:`/contacts/${contactID}`,
            method: 'DELETE',
        }),
        invalidatesTags:['Contacts'],
      }),
      AddContact: builder.mutation({
        query: (name, number) => ({
            url:`/contacts`,
            method: 'POST',
            body: {
                name:name,
                phone:number,
            },
        }),
        invalidatesTags:['Contacts'],
      }),
    }),
  })
  

  export const {useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation} = contactsApi
// console.log(useDeleteContactMutation);