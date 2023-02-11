// import PropTypes from 'prop-types';
import { Component } from 'react';
import axios from 'axios';

const API_KEY = '32008820-29a82a4a3d033faa63b9c6371';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// ?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// 'https://pixabay.com/api/?q=cat&page=1&key=API_KEY&image_type=photo&orientation=horizontal&per_page=12'

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    request: 1,
  };

  async componentDidMount() {
    this.setState({
      request: await axios.get(`?q=cat&page=1&key=${API_KEY}&`),
    });
  }

  render() {
    console.log(this.state.request.data);
    return (
      <li className="gallery-item">
        <img src="" alt="" />
      </li>
    );
  }
}
