import { gql } from "@apollo/client";


export const GET_USERS = gql` 
      query {
        users {
    id
    name
    email
    role
    props {
      id
      title
      slug
      desc
      published
    }
    
  }
      }
`


