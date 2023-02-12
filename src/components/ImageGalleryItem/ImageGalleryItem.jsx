// import PropTypes from 'prop-types';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  render() {
    const { images } = this.props;
    console.log(images);
    return (
      <>
        {images.map(image => {
          const { id, tags, webformatURL } = image;
          return (
            <li className="gallery-item" key={id}>
              <img src={webformatURL} alt={tags} />
            </li>
          );
        })}
      </>
    );
  }
}
