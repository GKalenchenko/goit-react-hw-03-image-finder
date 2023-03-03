// import PropTypes from 'prop-types';

import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({ largeImage, alt }) => {
  return (
    <Overlay>
      <ModalWindow>
        <img src={largeImage} alt={alt} />
      </ModalWindow>
    </Overlay>
  );
};
