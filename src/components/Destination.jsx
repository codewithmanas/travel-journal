import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types";

export default function Destination(props) {

  return (
    <div className="destination__section">
              <img src={props.item.img} alt="image" className="destination__img" />
              <div className="destination__details">
                  <div className="dest__location">
                  <FontAwesomeIcon icon={faLocationDot} className="dest__location__dot" />
                      <small className="dest__country">{props.item.country}</small>
                      <p className="dest__maps">View on Goole Maps</p>
                  </div>   
                  <h2 className="dest__title">{props.item.location}</h2>
                  <small className="dest__duration">{props.item.duration}</small>
                  <p className="dest__description">{props.item.description}</p>  
              </div>
    </div>
  )
}


Destination.propTypes = {
        item: PropTypes.object.isRequired  
};
