import React from 'react';
import { Form, } from 'semantic-ui-react';
import { UserConsumer, } from "../providers/UserProvider";

class UserForm extends React.Component { //add this.props.username
  state = { 
    username: this.props.username,
    userLastName: this.props.userLastName,
    email: this.props.email,
    gender: this.props.gender,
   };

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { username, userLastName, email, gender, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="Name"
        type="text"
        name="username"
        value={username}
        onChange={this.handleChange}
        />
        <Form.Input
        label="Last Name"
        type="text"
        name="userLastName"
        value={userLastName}
        onChange={this.handleChange}
        />
        <Form.Input
        label="Email"
        type="text"
        name="email"
        value={email}
        onChange={this.handleChange}
        />
        <Form.Select
        label="Gender"
        name="gender"
        value={gender}
        onChange={this.handleChange}  // edit for the user things like name, last name, email, avatar>
        options={genderOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const genderOptions = [
  { key: "m", text: "Male", value: "Male", },
  { key: "f", text: "Female", value: "Female", },
  { key: "o", text: "Other", value: "Other", },
  { key: "p", text: "Prefer not to say", value: "Prefer not to say", },
];

export default UserForm;