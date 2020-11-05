import React from 'react'
import { Icon, Button, Card, Image, Label } from 'semantic-ui-react'
import moment from 'moment'
import {Link } from 'react-router-dom'
import LikeButton from './LikeButton';


function PostCard( {
    post: { body, createdAt, id, username, likeCount, commentCount, likes}
}) {

return(
    <Card fluid >
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=624&q=80'
      />
      <Card.Header>{username}</Card.Header>
      <Card.Meta as = {Link} to = {`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
      <Card.Description>
{body}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <LikeButton user="user" post={{ id, likes, likeCount }} />
    <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
    </Card.Content>
  </Card>
)
}

export default PostCard;