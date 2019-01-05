import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HotTyper from 'react-hot-typer';
export class Home extends Component {
  static propTypes = {

  }

  render() {
    const typeOption ={
      typingRate: 300,
      cursorFlashRate: 150,

    }
    return (
      <div>
        <div style={{width: 600}}>
          <h1>
            <HotTyper
              {...typeOption}
              text={[
                'My name is Ali',
                'My name is  Alizada',
              ]}
            />
          </h1>
          <h2>Full Stack Developer</h2>
          <div className="text-box">
            <p className='desciption-text'>Here you can find some usefull librarry which I'm using in my workspace or I think its worth to learn and archive.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
