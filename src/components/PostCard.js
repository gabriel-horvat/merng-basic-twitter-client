import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import moment from 'moment'


function PostCard( {
    post: { body, createdAt, id, username, likeCount, commentCount, likes}
}) {

return(
    <Card>
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=624&q=80'
      />
      <Card.Header>{username}</Card.Header>
      <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
      <Card.Description>
{body}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green'>
          Approve
        </Button>
        <Button basic color='red'>
          Decline
        </Button>
      </div>
    </Card.Content>
  </Card>
)
}

export default PostCard;