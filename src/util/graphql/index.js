import {gql} from '@apollo/client'


export const FETCH_POSTS_QUERY = gql`
{
    
  getPosts {
    id
    body
    createdAt
    username
    comments{
      id
      createdAt
      body
    }
    likes{
      id
      username
    }
  }

 
 }
`