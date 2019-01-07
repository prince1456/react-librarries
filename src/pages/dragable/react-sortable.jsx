import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import './styles.scss';
import slide1 from '../../assets/images/slide1.jpeg';
import slide2 from '../../assets/images/slide2.jpeg';
import slide3 from '../../assets/images/slide3.jpg';
import slide4 from '../../assets/images/slide4.jpeg';

const images = [
  {src: slide1},
  {src: slide2},
  {src: slide3},
  {src: slide4},
 ]

const SortableItem = SortableElement(({photo}) => <img src={photo.src} /> )

const SortableList = SortableContainer(({images}) => {
    return (
        <div className="react-sortable-gallery">
         { images.map((image, i) => <SortableItem key={i} photo={image} index={i}/> )}
        </div>
    )
  })
export class ReactSortable extends Component {
    state = {
        images: images,
    }
    onSortEnd = ({oldIndex, newIndex}) => {
        console.log(oldIndex, newIndex)
        this.setState({
          images: arrayMove(this.state.images, oldIndex, newIndex),
        });
      };
  render() {
    return (
      <div>
           <div className='text-container'>
                <h3>Features</h3>
                <ul>
                    <li>Higher Order Components – Integrates with your existing components</li>
                    <li>Drag handle, auto-scrolling, locked axis, events, and more!</li>
                    <li>Suuuper smooth animations – Chasing the 60FPS dream 🌈</li>
                    <li>Works with virtualization libraries: react-virtualized, react-tiny-virtual-list, react-infinite, etc.</li>
                    <li>Horizontal lists, vertical lists, or a grid ↔ ↕ ⤡</li>
                </ul>
          </div>
          <div className='react-sortable-conatiner'>
            {<SortableList images={this.state.images} onSortEnd={this.onSortEnd}/>}
          </div>
          <div className='text-container'>
                <h4>Why Should i use this</h4>
                <p>There are already a number of great Drag & Drop libraries out there (for instance, react-dnd is fantastic). If those libraries fit your needs, you should definitely give them a try first. However, most of those libraries rely on the HTML5 Drag & Drop API, which has some severe limitations. For instance, things rapidly become tricky if you need to support touch devices, if you need to lock dragging to an axis, or want to animate the nodes as they're being sorted. React Sortable HOC aims to provide a simple set of higher-order components to fill those gaps. If you're looking for a dead-simple, mobile-friendly way to add sortable functionality to your lists, then you're in the right place.</p>
          </div>
      </div>
    )
  }
}

export default ReactSortable


