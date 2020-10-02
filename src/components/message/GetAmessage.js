import React from "react";

class GetaMessage extends React.Component {
  state = { messages: [] };

  componentDidMount() {
    new DataService()
      .getAMessage()
      .then((response) => this.setState({ messages: response.data.messages }));
  }

  // getAmessage (username){
  //   return this.client.then(response)=> { this.setState({
  //     user: response.data
  //   }) messages
  //     .filter((message) => message.includes("username"))
  //     .map((filteredMessage) => (
  //       <li>{filteredMessage}</li>
  //     ))}

  // }

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="MyMessages">
          <h1>My Messages</h1>
          <h3>LOADING...</h3>
        </div>
      );
    }
  }
}
export default GetaMessage;
