import React, { Component, Fragment } from 'react'
import Lightbox from 'react-images';
import slide1 from '../../assets/images/slide1.jpeg';
import slide2 from '../../assets/images/slide2.jpeg';
import slide3 from '../../assets/images/slide3.jpg';
import slide4 from '../../assets/images/slide4.jpeg';

const images = [{
  src: slide1},
  {src: slide2},
  {src: slide3},
  {src: slide4},
 ]
export class RactImages extends Component {
  
  state= {
    lightboxIsOpen: false,
    currentImage: 0,
  }
  openLightbox  = (index, event) =>{
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious = () =>{
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext =  () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage = (index) => {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage = () =>{
		if (this.state.currentImage === this.props.images.length - 1) return;
		this.gotoNext();
	}
  render() {
    return (
        <div > 
          <div className='text-container'>
            <h4>A simple, responsive lightbox component for displaying an array of images.</h4>
            <p>This librarry help you to have image lightbox for your images. </p>
            <p>
              You need to render your gallery first then set your click handler for each image to open lightbox for image you click <br/></p>
              <b>{"<img src={image.src} style={{width: '100%'}} onClick={e =>this.openLightbox(i, e)}/>"}</b>
          </div>
          <div className='row'>
          <div className='column'>
          {
        
            images.map((image, i) => i % 2 === 0 && <img key={i} src={image.src} style={{width: '100%'}} onClick={e =>this.openLightbox(i, e)}/> )
          }
          </div>
          <div className='column'>
          {
        
            images.map((image, i) => i % 2 !==0 && <img key={i} src={image.src} style={{width: '100%'}} onClick={e =>this.openLightbox(i, e)}/> )
          }
          </div>
          </div>
          <Lightbox
            currentImage={this.state.currentImage}
            images={images}
            isOpen={this.state.lightboxIsOpen}
            onClickImage={this.handleClickImage}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClickThumbnail={this.gotoImage}
            onClose={this.closeLightbox}
            showThumbnails={true}
            spinner={this.props.spinner}
            //  theme={this.props.theme}
          />
      </div>
    )
  }
}

export default RactImages
