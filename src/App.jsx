import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function App() {


  return (
    <>
      <nav className="navbar">
        <FontAwesomeIcon icon={faEarthAmericas} className="nav__logo" />
        <span className="nav__title">my travel journal</span>
      </nav>

      <section className="hero">
            <div className="destination__section">
              <img src="https://source.unsplash.com/WLxQvbMyfas" alt="image" className="destination__img" />
              <div className="destination__details">
                  <div className="dest__location">
                  <FontAwesomeIcon icon={faLocationDot} className="dest__location__dot" />
                      <small className="dest__country">Japan</small>
                      <p className="dest__maps">View on Goole Maps</p>
                  </div>   
                  <h2 className="dest__title">Mount Fuji</h2>
                  <small className="dest__duration">12 Jan, 2021 - 24 Jan, 2021</small>
                  <p className="dest__description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>  
              </div>
            </div>

            <hr />
            <div className="destination__section">
              <img src="https://source.unsplash.com/JmuyB_LibRo" alt="image" className="destination__img" />
              <div className="destination__details">
                  <div className="dest__location">
                  <FontAwesomeIcon icon={faLocationDot} className="dest__location__dot" />
                      <small className="dest__country">Australia</small>
                      <p className="dest__maps">View on Goole Maps</p>
                  </div>   
                  <h2 className="dest__title">Sydney Opera House</h2>
                  <small className="dest__duration">27 May, 2021 - 8 Jun, 2021</small>
                  <p className="dest__description">The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century&apos;s most famous and distinctive buildings</p>  
              </div>
            </div>

            <hr />
            <div className="destination__section">
              <img src="https://source.unsplash.com/3PeSjpLVtLg" alt="image" className="destination__img" />
              <div className="destination__details">
                  <div className="dest__location">
                  <FontAwesomeIcon icon={faLocationDot} className="dest__location__dot" />
                      <small className="dest__country">Norway</small>
                      <p className="dest__maps">View on Goole Maps</p>
                  </div>   
                  <h2 className="dest__title">Geirangerfjord</h2>
                  <small className="dest__duration">01 Oct, 2021 - 18 Nov, 2021</small>
                  <p className="dest__description">The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</p>  
              </div>
            </div>
            
      </section>

    </>
  )
}

export default App
