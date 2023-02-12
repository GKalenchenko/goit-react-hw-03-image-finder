import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Component } from 'react';

export class App extends Component {
  state = {
    inputValue: '',
  };

  render() {
    return (
      <>
        <SearchBar />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Loader />
      </>
    );
  }
}
