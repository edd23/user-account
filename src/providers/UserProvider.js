import React from 'react';

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
    username: "Corona19",
    dateJoined: "3/20/2020",
  };

 render() {
  return (
    <UserContext.Provider value={this.state}>
     { this.props.children }
    </UserContext.Provider>
  )
 }
}

export default UserProvider;