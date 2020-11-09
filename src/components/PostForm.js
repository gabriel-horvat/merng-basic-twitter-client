import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { useForm } from '../util/hooks';
import { CREATE_POST_MUTATION, FETCH_POSTS_QUERY } from '../util/graphql';


function PostForm() {
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: ''
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(_, result) {
        console.log(result);
        values.body = '';
    }
})

  function createPostCallback() {
    createPost();
  }

  return (
      <Form onSubmit={onSubmit}>
        <h2>Create a post:</h2>
        <Form.Field>
          <Form.Input
            placeholder="Hi World!"
            name="body"
            onChange={onChange}
            value={values.body}
          />
          <Button type="submit" color="teal">
            Submit
          </Button>
        </Form.Field>
      </Form>
  );
}

export default PostForm;