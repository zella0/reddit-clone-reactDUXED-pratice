import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, Field } from "react-final-form";

import { Route, Link, Switch } from 'react-router-dom';

import { createPost } from '../redux/actions/postsActions';

import {
  Box,
  Button,
  ControlFeedback,
  FormGroup,
  Input,
  Label,
  Textarea,
  Typography
} from "smooth-ui";


class PostsNew extends Component {
  render() {
    const onSubmit = async values => {
      await sleep(300);
      this.props.createPost(values, this.props.history);
    };

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const adapt = Component => ({
      input,
      meta: { valid },
      ...rest
    }) => <Component {...input} {...rest} valid={input.value ? valid : null } />;
    const AdaptedInput = adapt(Input);
    const AdaptedTextarea = adapt(Textarea);

    const Error = ({ name }) => (
      <Field name={name} subscription={{ error: true, touched: true }}>
        {({ meta: { touched, error } }) =>
          touched && error ? (
            <ControlFeedback valid={!error}>{error}</ControlFeedback>
          ) : null
        }
      </Field>
    );

    const required = value => (value ? null : "Required");
    
    return (
      <div className="container">
        <Typography variant="h1">Submit a Post</Typography>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Title</Label>
                <Field
                  name="title"
                  component={AdaptedInput}
                  placeholder="Title..."
                  validate={required}
                  control
                />
                <Error name="title" />
              </FormGroup>
              <FormGroup>
                <Label>Categories</Label>
                <Field
                  name="categories"
                  component={AdaptedInput}
                  placeholder="Categories..."
                  validate={required}
                  control
                />
                <Error name="categories" />
              </FormGroup>
              <FormGroup>
                <Label>Content</Label>
                <Field
                  name="content"
                  component={AdaptedTextarea}
                  placeholder="Content..."
                  validate={required}
                  control
                />
                <Error name="content" />
              </FormGroup>
              <Box justifyContent="">
                <Button
                  type="submit"
                  disabled={submitting || pristine}
                  variant="primary"
                >
                  Submit
              </Button>
                <Button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                  variant="secondary"
                >
                  Reset
              </Button>
              </Box>
            </form>
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { 
  createPost
}

export default connect(null, mapDispatchToProps)(PostsNew);