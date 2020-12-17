import React from 'react';
import ReactDOM from 'react-dom';
import SimpleReactLightbox from 'simple-react-lightbox'
import SimpleImageGalleryWithThumbImage from './SimpleImageGalleryWithThumbImage'
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
     <SimpleImageGalleryWithThumbImage/>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);
