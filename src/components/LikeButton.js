import React from 'react';
import { Button, Label, Icon } from 'semantic-ui-react';


function LikeButton({ user, post: { id, likeCount, likes } }) {

  return (
    <Button as="div" labelPosition="right">
      <Label basic color="teal" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
}

export default LikeButton;