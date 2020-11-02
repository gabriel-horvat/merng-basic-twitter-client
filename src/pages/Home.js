import React from 'react'
import {useQuery, gql} from '@apollo/client'


function Home() {
    const {loading, data} = useQuery(FETCH_POSTS_QUERY)

    if (data) {
        console.log(data);
    }

    return (
        <div>
            Home page
        </div>
    )
}

const FETCH_POSTS_QUERY = gql`
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

export default Home