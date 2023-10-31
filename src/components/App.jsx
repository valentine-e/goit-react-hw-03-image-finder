import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Api from './api';

export class App extends Component {
  state = {
    queryName: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
  };

  handleSearchSubmit = localQuery => {
    this.setState({ queryName: localQuery });
  };

  handleLoadMore = () => {
    this.setState(prevState => prevState.page + 1);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     this.state.query !== prevState.query ||
  //     this.state.page !== prevState.page
  //   ) {
  //     // hhtp запит і setState
  //   }
  // }

  render() {
    const { handleSearchSubmit, handleLoadMore } = this;

    return (
      <div>
        <Searchbar onSubmit={handleSearchSubmit} Search form />
        {/* <Api requestName={this.state.queryName} /> */}
        {this.state.images.length > 0 && <div>Rallery</div>}
        <div>Loader</div>
        <button onClick={handleLoadMore}>Load more</button>
        <ToastContainer position="top-right" theme="colored" autoClose="3000" />
      </div>
    );
  }
}
