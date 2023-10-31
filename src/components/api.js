// import axios from "axios";

// const API_KEY = '33584802-e836107f470a1a46170cd6658';

// const api = axios.defaults.baseURL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

// console.log(api);

import { Component } from 'react';

export default class Api extends Component {
  componentDidUpdate(prevProps, prevState) {
    // if (
    //   this.state.query !== prevState.query ||
    //   this.state.page !== prevState.page
    // ) {
    //   // hhtp запит і setState
    // }

    if (prevProps.requestName !== this.props.requestName) {
      console.log('+');
    }
  }
  render() {
    return (
      <div>
        <h1>image request</h1>
        <p>{this.props.requestName}</p>
      </div>
    );
  }
}
