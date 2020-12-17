import React from 'react';
import ReactDOM from 'react-dom';
// import GoogleLoginc from './GoogleLogin';
// import ProgressBar from './others/ProgressBar';
// import ClickChangeColor from './ClickChangeColor';
// import SearchableDropdown from './SearchableDropdown';
// import LiveSearchFilter from './SearchFilter';
// import App from './App';
// import LoadMorePagination from './LoadMorePagination';
// import ImagePopUpGallery from './ImagePopUpGallery';
// import ReactsToastify from './React-toastify';
// import ToastSound from './ToastSound';
// import PanelMenus from './PanelMenu';
import SimpleReactLightbox from 'simple-react-lightbox'
import SimpleImageGalleryWithThumbImage from './SimpleImageGalleryWithThumbImage'
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
    {/* <LoadMorePagination/> */}
    {/* <ImagePopUpGallery/> */}
     <SimpleImageGalleryWithThumbImage/>
    {/* <GoogleLoginc/> */}
    {/* <App /> */}
    {/* <ProgressBar/> */}
    {/* <ReactsToastify/> */}
    {/* <ToastSound/> */}
    {/* <ClickChangeColor/> */}
    {/* <LiveSearchFilter/> */}
    {/* <SearchableDropdown/> */}
    {/* <PanelMenus/> */}
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);