"use client"
import React from "react";
import {dehydrate , QueryClientProvider} from "react-query";
import {Hydrate} from "react-query/hydration";
import {queryClient} from "@/app/_lib/query_client";
import {ReactQueryDevtools} from "react-query/devtools";


export default  function ReactQueryClientProvider({
                                             children ,
                                         }: {
    children: React.ReactNode
}) {
    const dehydratedState = dehydrate(queryClient);
    return (
         <QueryClientProvider client={queryClient}>
             <Hydrate  state={dehydratedState}>
                 {children}
             </Hydrate>
             <ReactQueryDevtools initialIsOpen={false}/>
         </QueryClientProvider>
     )
}