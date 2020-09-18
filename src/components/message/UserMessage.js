import React from "react";
import "../message/Message.css";
import DataService from "../../dataService";

class UserMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };

    this.client = new DataService();
  }

  handleMessage = (e) => {
    e.preventDefault();
    this.client.postUserMessages(this.state.message).then((message) => {
      console.log(message);
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form className="ui form form-control" onSubmit={this.handleMessage}>
        <div className="field message-post-textarea">
          <textarea
            name="message"
            placeholder="Send your signal"
            rows="3"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="field postBtn">
          <button type="submit">Send</button>

          {/* <li className="Message">
            <strong>{this.props.username}</strong> on{" "}
            {new Date(this.props.createdAt).toDateString()} posted:
            <div className="message-text">{this.props.text}</div>
            <div className="likes">Likes: {this.props.likes}</div>
          </li> */}
        </div>
      </form>
    );
  }
}

export default UserMessage;
