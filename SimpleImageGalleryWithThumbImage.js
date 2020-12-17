import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";

function SimpleImageGalleryWithThumbImage() {
    
const images = [
    {
        src:"//placekitten.com/1500/500",
        caption:'first cat'
    },
    {
        src:"//placekitten.com/1500/1500",
        caption:'second cat'
    },
    {
        src:"//placekitten.com/800/1200",
        caption:'third cat'
    },
    {
        src:"//placekitten.com/4000/3000",
        caption:'fourth cat'
    },
  ];
    const options = {
        settings: {
            autoplaySpeed: 3000,
            boxShadow: 'none',
            disableKeyboardControls: false,
            disablePanzoom: false,
            disableWheelControls: false,
            hideControlsAfter: 3000,
            lightboxTransitionSpeed: 0.3,
            lightboxTransitionTimingFunction: 'linear',
            overlayColor: 'rgba(30, 30, 30, 0.9)',
            slideAnimationType: 'fade',
            slideSpringValues: [300, 50],
            slideTransitionSpeed: 0.6,
            slideTransitionTimingFunction: 'linear',
            usingPreact: false
          },
          buttons: {
            backgroundColor: 'rgba(30,30,36,0.8)',
            iconColor: 'rgba(255, 255, 255, 0.8)',
            iconPadding: '10px',
            showAutoplayButton: true,
            showCloseButton: true,
            showDownloadButton: true,
            showFullscreenButton: true,
            showNextButton: true,
            showPrevButton: true,
            showThumbnailsButton: true,
            size: '40px'
          },
          caption: {
            captionAlignment: 'start',
            captionColor: '#FFFFFF',
            captionContainerPadding: '0',
            captionFontFamily: 'inherit',
            captionFontSize: 'inherit',
            captionFontStyle: 'inherit',
            captionFontWeight: 'inherit',
            captionTextTransform: 'inherit',
            showCaption: true
          },
          thumbnails: {
            showThumbnails: true,
            thumbnailsAlignment: 'center',
            thumbnailsContainerBackgroundColor: 'transparent',
            thumbnailsContainerPadding: '0',
            thumbnailsGap: '0 1px',
            thumbnailsIconColor: '#ffffff',
            thumbnailsOpacity: 0.4,
            thumbnailsPosition: 'bottom',
            thumbnailsSize: ['100px', '80px']
          },
          progressBar: {
            backgroundColor: '#f2f2f2',
            fillColor: '#000000',
            height: '3px',
            showProgressBar: true
          }
      };
    return (
        <div>
            <SRLWrapper options={options}>
                <h2>Image Gallery</h2>
                {
                    images.map((image,i)=>
                    <div>
                         <a href={image.src}>
                            <img src={image.src} alt={image.caption} />
                        </a>
                    </div>
                    )
                }
    </SRLWrapper>
        </div>
    )
}

export default SimpleImageGalleryWithThumbImage
