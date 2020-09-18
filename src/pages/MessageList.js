import React from "react";
import Menu from "../components/menu/Menu";
import Message from "../components/message/Message";
import DataService from "../dataService";

class MessageList extends React.Component {
  state = { messages: [] };

  componentDidMount() {
    new DataService()
      .getAllMessages()
      .then((response) => this.setState({ messages: response.data.messages }));
  }
  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="MessageList">
          <h1>Message List</h1>
          <h3>LOADING...</h3>
        </div>
      );
    }
    return (
      <div className="MessageList">
        <Menu />
        <h1>Message Feed</h1>
        <ul>
          {this.state.messages.map((messageObject) => (
            <Message key={messageObject.id} {...messageObject} />
          ))}
        </ul>
      </div>
    );
  }
}
export default MessageList;
