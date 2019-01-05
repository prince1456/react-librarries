import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Layout } from '../commons'
import { createBrowserHistory } from 'history';
import { Home, About, ReactCarousel, ReactImages } from '../pages'
const history  = createBrowserHistory()
export class Root extends Component {

  render() {
    return (
     <Router >
      <Switch history={history}>
        <Layout>
          <header>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/react-carousel' component={ReactCarousel}/>
            <Route exact path='/react-images' component={ReactImages}/>
          </header>
        </Layout>
      </Switch>
     </Router>
    )
  }
}

export default Root
