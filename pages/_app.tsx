import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient } from 'apollo-client';
import { SaleorProvider,ProductFilterInput,} from "@saleor/sdk";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://demo.saleor.io/graphql/',
  })
});
const apolloConfig = {
   
  clientInformation:client
  /* 
    Optional custom Apollo client config.
    Here you may append custom Apollo cache, links or the whole client. 
    You may also use import { createSaleorCache, createSaleorClient, createSaleorLinks } from "@saleor/sdk" to create semi-custom implementation of Apollo.
  */
};


const config = { apiUrl: "https://demo.saleor.io/graphql/" ,channel: "",};
function MyApp({ Component, pageProps }: AppProps) {
  return(
    
  <SaleorProvider config={config} >
     <Component {...pageProps} />
     </SaleorProvider>
     
  )
}
export default MyApp
