// import PropTypes from 'prop-types';

import {
  SearchWrapper,
  SearchButton,
  SearchForm,
  SearchInput,
  SearchButtonLabel,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchWrapper className="searchbar">
      <SearchForm className="form" onSubmit={onSubmit}>
        <SearchButton type="submit" className="button" />
        <SearchButtonLabel class="button-label">Search</SearchButtonLabel>
        <SearchInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchWrapper>
  );
};
