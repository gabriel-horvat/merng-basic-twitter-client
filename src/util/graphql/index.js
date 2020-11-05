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

export const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;