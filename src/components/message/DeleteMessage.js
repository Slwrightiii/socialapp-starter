import React from "react";
import DataService from "../../dataService";

class DeleteMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // message: "",
      id: "",
    };

    this.client = new DataService();
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.client.deleteUserMessage(this.props.id);
  };

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  render() {
    if (this.props.username === undefined) {
      return;
    }
    const deleteButton = <div></div>;
    const currentUser = localStorage.getItem("login");
    if (this.props.username === currentUser.result.username) {
      deleteButton = (
        <button type="submit" onClick={this.handleDelete}>
          Delete
        </button>
      );
    }
    return (
      <div>
        <form>
          {deleteButton}
          {/* {this.state.message.map((messageObject) => (
            <Message key={messageObject.id} {...messageObject} />
          ))} */}
        </form>
      </div>
    );
  }
}

export default DeleteMessage;
