import { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
  };

  hendleSubmit = evt => {
    evt.preventDefault();
    // зберегти значення пошуку (query)
    // скинути page to 1
    // очистити масив картинок
  };

  handleLoadMore = () => {
    this.setState(prevState => prevState.page + 1);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      // hhtp запит і setState
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>Search form</form>
        {this.state.images.length > 0 && <div>RGallery</div>}
        <div>Loader</div>
        <button onClick={this.handleLoadMore}>Load more</button>
      </div>
    );
  }
}
