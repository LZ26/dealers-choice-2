import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      phones: [],
      selectedPhone: {},
    };
  }

  async componentDidMount(id) {
    const data = (await axios.get('/api/phones')).data;
    this.setState({ phones: data });

    const phone = (await axios.get(`/api/phones/${id}`)).data;
    this.setState({ selectedPhone: phone });
    console.log(phone);
  }

  render() {
    return (
      <div>
        <a href="#">Home</a>
        <div>
          <a href="#">Phones</a>
        </div>
        <div>
          <a href="#">Add</a>
        </div>
        <ul>
          {this.state.phones.map((p) => {
            return (
              <div>
                <li>{p.model}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
