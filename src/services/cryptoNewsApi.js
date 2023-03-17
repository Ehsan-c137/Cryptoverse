import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
   "X-BingApis-SDK": "true",
   "X-RapidAPI-Key": "349a6d2d03mshf1c74ea1a177a20p11d67djsn8ed15f9f9fc5",
   "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-search-apis.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
   reducerPath: "cryptoNewsApi",
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getCryptoNews: builder.query({
         query: ({ newsCategory, count }) =>
            createRequest(
               `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
            ),
      }),
   }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
