import React from "react";
import DataService from "../../dataService";
import "./GetUserAndPic.css";
import { Button } from "antd";

class GetUserAndPic extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      usernameQuery: "",
      user: {
        username: "",
        displayName: "",
        pictureLocation: "",
        about: "",
        createdAt: "",
        updatedAt: "",
        googleId: "",
      },
    };
  }

  getUsernameAndPic = (username) => {
    return this.client.getSingleUser(username).then((response) => {
      this.setState({ user: response.data.user }, () =>
        console.log(this.state.user)
      );
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getUsernameAndPic(this.state.usernameQuery);
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="usernameQuery"
            required
            onChange={this.handleChange}
          />
          <Button htmlType="submit" type="primary">
            Get User
          </Button>
          <br />
          <div>
            <h3>User Found: {this.state.user.username}</h3>
          </div>
        </form>
        <img
          src={
            "https://socialapp-api.herokuapp.com" +
            this.state.user.pictureLocation
          }
          alt="Profile Photo"
        />
        <br />
        <br />
        <div>About : </div>
        <br />
      </div>
    );
  }
}

export default GetUserAndPic;

//   NOTES   //
// - user needs to get their user name
// - user needs to get their picture

// - button to submit to get name
// - button to submit to get picture

// - place to display name ...  profile ?
// - place to display picture ... profile  ... SET/PUT pic API point

//   "user": {
//     "username": "string",
//     "displayName": "string",
// "about": "string",
// "createdAt": "2020-09-25T18:48:27.728Z",
// "updatedAt": "2020-09-25T18:48:27.728Z",
// "pictureLocation": "string",
// "googleId": "string"
//   },

/// under getUsernameAndPic()  ///
//let currentUser = user.username

/// under render()  ///
// const submitButton = <h6></h6>;
// let currentUser = localStorge.getItem("login");
// <h6>
//   if (this.props.username === currentUser){" "}
//   {
//     (submitButton = (
//       <Button htmlType="submit" type="primary">
//         Get User
//       </Button>
//     ))
//   }
// </h6>;
