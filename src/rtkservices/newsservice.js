import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://openapiv1.coinstats.app',
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            headers.set('X-API-KEY', '8q1zGdYO5XSRkuPI5c0n3jiNvdQ3HGeKW2IsY5b+knE=');
            return headers
        }
    }),
    endpoints: (builder) => ({
        getInitialNews: builder.query({
            query: () => '/news/type/trending?limit=4'
        }),
        getInitialCoinsList: builder.query({
            query: () => '/coins?page=1&limit=5&currency=INR'
        })
    })
})

export const { useGetInitialNewsQuery, useGetInitialCoinsListQuery } = newsApi