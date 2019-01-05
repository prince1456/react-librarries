import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { scaleRotate as Menu } from 'react-burger-menu'
import Nav from './nav'
import {Link, withRouter } from 'react-router-dom'
import './styles.scss';



export class Layout extends Component {
  handleClick = (e) => {
    console.log('click ', e.item.props.to);
    this.props.history.push(e.item.props.to)
    console.log(this.props)
  }
  render() {
    return (
      <div id="app" style={{ backgroundColor: '#e896ba' }}>
        <div id="outer-container">
          <Menu id="scaleRotate" pageWrapId='page-wrap' outerContainerId="outer-container">
            <Nav handleClick={this.handleClick} />
            
            <a id="about" className="menu-item" href="/about">About</a>
         </Menu>
          <main id="page-wrap" className="container">
          {this.props.children}
          </main>
        </div>
        </div>
    )
  }
}


Layout.defaultProps = {

}

Layout.propTypes = {

}
export default withRouter(Layout);

