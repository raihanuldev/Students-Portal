import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://student-portal-backend.vercel.app" }),
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => ({
        url: "add-student",
        method: "POST",
        body: data,
      }),
    }),
    getStudents: builder.query({
      query: () => ({
        url: "students",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetStudentsQuery ,useAddStudentMutation} = baseApi;
