import { Component } from 'react';
import style from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    localQuery: '',
  };

  handleChange = e => {
    this.setState({ localQuery: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.localQuery.trim() === '') {
      toast.warn('No request...');
      return;
    }

    this.props.onSubmit(this.state.localQuery);
    this.setState({ localQuery: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <header className={style.Searchbar}>
        <form onSubmit={handleSubmit} className={style.Form}>
          <button className={style.SearchForm_button}>
            <BsSearch />
            <span className={style.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={style.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }
}
