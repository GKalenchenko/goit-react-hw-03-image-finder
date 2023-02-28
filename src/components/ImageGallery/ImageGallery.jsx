// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import axios from 'axios';
import { Button } from 'components/Button/Button';
import { ImageList } from './ImageGallery.styled';

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
  };

  async componentDidMount() {
    // this.setState({ isLoading: true });
    // try {
    //   const response = await axios.get(
    //     `${BASE_URL}?q=cat&page=${this.state.currentPage}&key=32008820-29a82a4a3d033faa63b9c6371&image_type=photo&orientation=horizontal&per_page=12'`
    //   );
    //   this.setState({ response: response.data.hits });
    // } catch (error) {
    //   this.setState({ error });
    // } finally {
    //   this.setState({ isLoading: false });
    // }
  }

  async componentDidUpdate({ inputValue }, { currentPage, response }) {
    console.log(this.props.inputValue !== inputValue);
    if (
      this.state.currentPage !== currentPage ||
      this.props.inputValue !== inputValue
    ) {
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${this.props.inputValue}&page=${this.state.currentPage}&key=32008820-29a82a4a3d033faa63b9c6371&image_type=photo&orientation=horizontal&per_page=12'`
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

    if (
      this.state.currentPage === currentPage &&
      this.props.inputValue !== inputValue
    ) {
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${this.props.inputValue}&page=${this.state.currentPage}&key=32008820-29a82a4a3d033faa63b9c6371&image_type=photo&orientation=horizontal&per_page=12'`
        );
        this.setState(prev => {
          return { response: [...response.data.hits] };
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
          <ImageList className="gallery">
            <ImageGalleryItem images={response} />
          </ImageList>
        )}
        {isLoading && <p>Loading...</p>}
        {!isLoading && <Button onClick={this.onClick} />}
      </div>
    );
  }
}
