// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?key=32008820-29a82a4a3d033faa63b9c6371&image_type=photo&orientation=horizontal&per_page=12';

export class ImageGallery extends Component {
  state = {
    isLoading: false,
    error: null,
    response: [],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(`${BASE_URL}&q=cat&page=1'`);
      this.setState({ response: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, error, response } = this.state;

    return (
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Something went wrong please try again</p>}
        {response.length > 0 && (
          <ul className="gallery">
            <h2>Gallery!</h2>
            <ImageGalleryItem images={response} />
          </ul>
        )}
      </div>
    );
  }
}
