// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import axios from 'axios';
import { Button } from 'components/Button/Button';

const BASE_URL = 'https://pixabay.com/api/';

export class ImageGallery extends Component {
  state = {
    isLoading: false,
    error: null,
    response: [],
    currentPage: 1,
  };

  onClick = evt => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
    console.log(this.state.currentPage);
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(
        `${BASE_URL}?q=cat&page=${this.state.currentPage}&key=32008820-29a82a4a3d033faa63b9c6371&image_type=photo&orientation=horizontal&per_page=12'`
      );
      this.setState({ response: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(_, { currentPage, response }) {
    if (this.state.currentPage !== currentPage) {
      try {
        const response = await axios.get(
          `${BASE_URL}?q=cat&page=${this.state.currentPage}&key=32008820-29a82a4a3d033faa63b9c6371&image_type=photo&orientation=horizontal&per_page=12'`
        );
        this.setState(prev => {
          return { response: [...prev.response, ...response.data.hits] };
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { isLoading, error, response } = this.state;

    return (
      <div>
        {error && <p>Something went wrong please try again</p>}
        {response.length > 0 && (
          <ul className="gallery">
            <h2>Gallery!</h2>
            <ImageGalleryItem images={response} />
          </ul>
        )}
        {isLoading && <p>Loading...</p>}
        {!isLoading && <Button onClick={this.onClick} />}
      </div>
    );
  }
}
