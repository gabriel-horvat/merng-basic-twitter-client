import React from 'react'
import {useQuery} from '@apollo/client'
import { Grid } from 'semantic-ui-react'
import PostCard from '../components/PostCard'
import { FETCH_POSTS_QUERY } from '../util/graphql/index';


function Home() {

    const {
        loading,
         data, 
         error
        } = useQuery(FETCH_POSTS_QUERY)

        if (loading) return<p>Loading</p>;
        if (error) return <p>ERROR</p>;
        if (!data | data === undefined) return <p>Not found</p>;

        console.log(error);

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
            {data && 
                data.getPosts.map(post => (
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

export default Home