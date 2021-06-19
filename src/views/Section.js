import React from 'react'
import {Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import PortfolioPage from "./PortfolioPage/PortfolioPage";

import './Section.css'

function Section() {
    return (
        <div className='section'>
        <Switch>
          <Route exact path="/land" component={LandingPage} /> 
          <Route exact path="/land/portfolio" component={PortfolioPage} />{/* null - 누구나 접속 가능한 페이지 */}
        </Switch>
      </div>
    )
}

export default Section
