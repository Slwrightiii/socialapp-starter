import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../dataService";
import UserMessage from "../components/message/UserMessage";
import GetUserAndPic from "../components/getUserAndPic/GetUserAndPic";
import PutPic from "../components/putPic/PutPic";

class Profile extends React.Component {
  state = { messages: [] };

  // componentDidMount() {
  //   new DataService()
  //     .postUserMessages()
  //     .then((response) => this.setState({ messages: response.data.messages }));
  // }

  render() {
    // if (this.state.messages.length === 0) {
    //   return (
    //     <div className="Profile">
    //       <h1>My Messages</h1>
    //       <h3>LOADING...</h3>
    //     </div>
    //   );
    // }

    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UserMessage />
        <br />
        <GetUserAndPic />
        <br />
        <PutPic />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
