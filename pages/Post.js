import  { useState } from "react";
import { gql, useQuery } from 'apollo-client';
import { useProductList } from "@saleor/sdk";

function getResp(response) {
  // console.log(response.products.edges[0].node.name);
    return response.products.edges;
}

function Post() {
    let [val,setVal] = useState([]);
    
      
      const req = gql`{
        products(first: 5) {
          edges {
            node {
              id
              name
              description
            }
          }
        }
      }`
   client.query({
        query: req,
        variables: { limit: 5 },
  })
  .then((response) => setVal(getResp(response.data)))
  .catch((err) => console.error("error!: " + err));

    return (
      <div>
        <Check response={val} />
      </div>
    )
}

export default Post