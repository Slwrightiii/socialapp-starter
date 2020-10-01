import React from "react";
import DataService from "../../dataService";
import "./PutPic.css";
import { Button } from "antd";

class PutPic extends React.Component {
  client = new DataService();

  state = {
    formData: null,
    imageURL: `https://socialapp-api.herokuapp.com/users/${this.client.getUsername()}/picture`,
  };

  // componentDidMount() {
  //   this.getCurrentUser().then(
  //     (response) => response.data.user.pictureLocation
  //   );
  // }

  createFormData = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("picture", file);

    this.setState({ formData }, this.upload);
  };

  setFallbackImage = (event) => {
    event.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/768px-No_image_available.svg.png";
  };

  upload = () => {
    if (this.state.formData === null) return;

    this.client.uploadPicture(this.state.formData).then((response) => {
      if (response.data.statusCode === 200) {
        this.updatePicture();
      }
    });
  };

  updatePicture() {
    const timestamp = Date.now();
    const imageURL = `https://socialapp-api.herokuapp.com/users/${this.client.getUsername()}/picture?t=${timestamp}`;
    this.setState({ imageURL });
  }

  render() {
    return (
      <div className="PutPic">
        <input
          type="file"
          accept="image/*"
          capture="user"
          name="picture"
          onChange={this.createFormData}
        />
        {/* <Button htmlType="submit" type="primary">
          Post Photo
        </Button> */}
        <div className="image-preview">
          <img
            src={this.state.imageURL}
            alt="user"
            onError={this.setFallbackImage}
            width={200}
          />
        </div>
      </div>
    );
  }
}

export default PutPic;
