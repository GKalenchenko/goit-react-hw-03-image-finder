import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Component } from 'react';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    inputValue: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
    console.log(this.state.inputValue);
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Loader />
      </>
    );
  }
}
