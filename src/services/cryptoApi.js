import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
   "X-RapidAPI-Key": "349a6d2d03mshf1c74ea1a177a20p11d67djsn8ed15f9f9fc5",
   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
   url,
   headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
   reducerPath: "cryptoApi",
   baseQuery: fetchBaseQuery({
      baseUrl,
   }),
   endpoints: (builder) => ({
      getCryptos: builder.query({
         query: (count) => createRequest(`/coins?limit=${count}`),
      }),
      getCryptoDetails: builder.query({
         query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      getCryptoHistory: builder.query({
         query: ({ coinId, timePeriod }) => {
            console.log(
               `${baseUrl}/coin/${coinId}/history?timeperiod=${timePeriod}`
            );
            return createRequest(
               `coin/${coinId}/history?timeperiod=${timePeriod}`
            );
         },
      }),
      getExchanges: builder.query({
         query: () => createRequest("/exchanges"),
      }),
   }),
});

export const {
   useGetCryptosQuery,
   useGetCryptoDetailsQuery,
   useGetCryptoHistoryQuery,
   useGetExchangesQuery,
} = cryptoApi;
