import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Images } from "./images";

export default () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { Images, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <div className={viewerIsOpen ? 'gallery-show' : 'gallery-hidden'}>
                <Gallery photos={Images} onClick={openLightbox} />
            </div>
          
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={

                    Images.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    })
                    
                  )}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      );
};