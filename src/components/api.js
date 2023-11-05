// import axios from 'axios';

// console.log(axios.isCancel('something'));

// const api = (axios.defaults.baseURL =
//   'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12');

// console.log(api);

import { Component } from 'react';
// const API_KEY = '33584802-e836107f470a1a46170cd6658';

export default class Api extends Component {
  state = {
    searchRequest: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequestName = prevProps.requestName;
    const newRequestName = this.props.requestName;
    // if (
    //   this.state.query !== prevState.query ||
    //   this.state.page !== prevState.page
    // ) {
    //   // hhtp запит і setState
    // }

    if (prevRequestName !== newRequestName) {
      console.log('+');

      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${newRequestName}&page=1&key=33584802-e836107f470a1a46170cd6658&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(searchRequest => this.setState({ searchRequest }))
        .finally(() => this.setState({ loading: false }));

      console.log(this.state.searchRequest);
    }
  }
  render() {
    const { requestName } = this.props;
    return (
      <div>
        <h1>image request</h1>
        {this.state.searchRequest === null && <div>Entes request</div>}
        {this.props.requestName && <p>{requestName}</p>}
      </div>
    );
  }
}
