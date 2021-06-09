import  { useState } from "react";
import gql from 'graphql-tag';
import { useProductList } from "@saleor/sdk";
import { useQuery } from '@apollo/react-hooks'

const GET_DOGS = gql`
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

function Post() {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <div>
      hello
    </div>
  );
}
export default Post