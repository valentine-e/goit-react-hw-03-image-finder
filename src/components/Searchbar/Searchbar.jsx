import { Component } from 'react';
import style from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    queryName: '',
  };

  handleChange = e => {
    this.setState({ queryName: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.queryName.trim() === '') {
      toast.warn('No request...');
      return;
    }

    this.props.onSubmit(this.state.queryName);
    this.setState({ queryName: '' });
  };

  render() {
    const { queryName } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <header className={style.Searchbar}>
        <form onSubmit={handleSubmit} className={style.Form}>
          <button type="submit" className={style.SearchForm_button}>
            <BsSearch />
            <span className={style.SearchForm_button_label}>Search</span>
          </button>

          <input
            value={queryName}
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
