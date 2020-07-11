import React, { Component } from 'react';
//import Modal from './components/Modal';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

class App extends Component {


   state = {
    models: [],
    likes: [],
    isShowing: false,
    clickedModel: {},
  };
  
   token = "Token cdcdaf568d6244459c84dd019241cd9a";

   componentDidMount() {
    this.getModels();
    this.getLikes();
  }

  getModels = () => {
    axios({
      method: 'get',
      url: 'https://api.sketchfab.com/v3/me/models',
      headers: {
        Authorization: this.token,
      },
    })
      .then(res => this.setState({ models: res.data.results }))
      .catch(err => console.log(err));
  };

  getLikes = () => {
    axios({
      method: 'get',
      url: 'https://api.sketchfab.com/v3/me/likes',
      headers: {
        Authorization: this.token,
      },
    })
      .then(res => this.setState({ likes: res.data.results }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={"https://static.sketchfab.com/img/press/logos/logo.png"}
            className="App-logo"
            alt="logo"
          />
          <p>
            Welcome to the <code>Tech/Frontend</code> exercise.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
