import React from "react";
import Menu from "../components/menu/Menu";
import Message from "../components/message/Message";
import DataService from "../dataService";

class GetaMessage extends React.Component {
  state = { username };

  componentDidMount() {
    new DataService()
      .getAMessage()
      .then((response) => this.setState({ username: response.data.messages }));
  }
  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="MyMessages">
          <h1>My Messages</h1>
          <h3>LOADING...</h3>
        </div>
      );
    }
    return <div className="MyMessages"></div>;
  }
}
export default GetaMessage;
