import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getProd: builder.query<Produto[], void>({
      query: () => '/api/ebac_sports'
    })
  })
})

export const { useGetProdQuery } = api

export default api
