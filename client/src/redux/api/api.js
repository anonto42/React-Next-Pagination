import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from './../../libs/config';

const api = createApi(
    {
        reducerPath:"api",
        baseQuery:fetchBaseQuery(
            {
                baseUrl:`${server}/api/`
            }
        ),

        endpoints:(builder)=>(
            {
                myChats: builder.query({
                    query:()=>(
                        {
                            url:"my"
                        }
                    )
                })
            }
        )
    }
)

export default api;