import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import Destination from './components/Destination'

import data from "./travel_data";
import React from 'react';

function App() {

  let items = data.map((item) => {
    return (
            <React.Fragment key={item.id}>
              <Destination
                  item={item}
                  />
              <hr />
          </React.Fragment>
      )
  })

  return (
    <>
      <nav className="navbar">
        <FontAwesomeIcon icon={faEarthAmericas} className="nav__logo" />
        <span className="nav__title">my travel journal</span>
      </nav>

      <section className="hero">
              {items}
      </section>

    </>
  )
}

export default App;
