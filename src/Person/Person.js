import React, { Component } from "react";
import Image from "../Image.jpg";

class Person extends Component {
  state = {
    fullName: "firas ounniche ",
    bio: "As a full-stack developer, you must be proficient with both back-end and front-end languages. A good full stack developer must need to have knowledge of top programming languages. You'd have to share your knowledge in multiple programming languages",
    imgSrc: <img src={Image} className="event" width='400' alt=""/>,
    profession: "Full stuck Web Developer",
   address: "firasounniche5@gmail.com",
    timer: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.timer}</h1>
        <h1 className="prenom"> {this.state.fullName} </h1>
        <p className="info">{this.state.bio}</p>
        {this.state.imgSrc}
        <h2 className="prenom">{this.state.profession}</h2>
      </div>
    );
  }
}
export default Person;