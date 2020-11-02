import React from 'react'
import {useQuery, gql} from '@apollo/client'
import { Grid } from 'semantic-ui-react'
import PostCard from '../components/PostCard'

function Home() {
    const {loading, data: {getPosts: posts}} = useQuery(FETCH_POSTS_QUERY)

    if (posts) {
        console.log(posts);
    }

    return (
        
        <Grid columns={3}>
            <Grid.Row>
                <h1>Posts</h1>
            </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        {loading ? (
            <h1> loading posts...</h1>
        ): 
        (
            <div>
            {posts && 
                posts.map(post => (
                <Grid.Column key = {post.id}>
                    <PostCard post = {post} />
                </Grid.Column>
            ))}
        </div>
        )}
      </Grid.Column>
    </Grid.Row>
    </Grid>
        
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