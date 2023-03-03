// import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  render() {
    const { images } = this.props;
    return (
      <>
        {images.map(image => {
          const { id, tags, webformatURL, largeImageURL } = image;
          return (
            <GalleryItem className="gallery-item" key={id}>
              <GalleryImage src={webformatURL} alt={tags} />
              <Modal largeImage={largeImageURL} alt={tags} />
            </GalleryItem>
          );
        })}
      </>
    );
  }
}
