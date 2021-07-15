import { useState } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
//import { useProductList } from "@saleor/sdk";

function getResp(response) {
  // console.log(response.products.edges[0].node.name);
  return response.products.edges;
}

function Post() {
  let [val, setVal] = useState([]);

  const REQ = gql`
    {
      products(first: 5) {
        edges {
          node {
            id
            name
            description
          }
        }
      }
    }
  `;

  <Query query={REQ}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;
      setVal(getResp(data));
      console.log(data);
      return <div>Hello {data.node[0].name}</div>;
    }}
  </Query>;
  //console.log(val);
}

export default Post;
