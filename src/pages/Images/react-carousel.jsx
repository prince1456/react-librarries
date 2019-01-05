import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery';
import './styles.scss'
const images = [
    {
      original: 'http://lorempixel.com/1000/600/nature/1/',
      thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      originalAlt: 'this is orginal image alt, add alt for image is very good for seo',
      thumbnailAlt: 'this is thumnail image alt, add alt for image is very good for seo',
      description: 'description about image, add description for image is very good for seo',
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/2/',
      thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/3/',
      thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    }
  ]
export class ReactCarousel extends Component {
  _customeAction = (e) => {
    alert("this is very good",e
    )
    console.log(e)
  }
  render() {
    const option = {
      infinite: true,
      lazyLoad: true,
      onClick: this._customeAction,
    }
    return (
      <Fragment> 
        <div className='text-container'>
        <h4>React image gallery is a React component for building image galleries and carousels</h4>
        <p>Features of react-image-gallery</p>
         <ul>
           <li>Mobile Swipe Gestures</li>
          <li>Thumbnail Navigation</li>
          <li>Fullscreen Support</li>
          <li>Custom Rendered Slides</li>
          <li>Responsive Design</li>
         <li> Tons of customization options (see props below)</li>
         <li> Lightweight ~8kb (gzipped, excluding react)</li>
         </ul>
         </div>
          <ImageGallery {...option} items={images} />
      </Fragment>
    )
  }
}

export default ReactCarousel;
