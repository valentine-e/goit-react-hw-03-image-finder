import { Component } from 'react';
import style from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    queryLocal: '',
  };

  handleChange = e => {
    this.setState({ queryLocal: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.queryLocal.trim() === '') {
      toast.warn('No request...');
      return;
    }

    this.props.onSubmit(this.state.queryLocal);
    this.setState({ queryLocal: '' });
  };

  render() {
    const { queryLocal } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <header className={style.Searchbar}>
        <form onSubmit={handleSubmit} className={style.Form}>
          <button type="submit" className={style.SearchForm_button}>
            <BsSearch />
            <span className={style.SearchForm_button_label}>Search</span>
          </button>

          <input
            value={queryLocal}
            name="search"
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
