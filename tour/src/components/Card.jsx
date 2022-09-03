import React from "react";
import mapper from "../assets/react.svg";
export default function (props) {
  console.log(props);
  return (
    <div className="card">
      <div className="image-div">
        <img src={props.imageUrl} alt="" srcset="" className="card--image " />
      </div>
      <div className="card--details">
        <p>
          <img src={mapper} alt="" srcset="" className="mapper" />
          <span className="country">{props.location}</span>
          <a href={props.googleMapsUrl} className="map">
            View on Google Maps
          </a>
        </p>
        <h1 className="name">{props.title}</h1>
        <p className="date">
          <span>{props.startDate}</span>
          <span> - {props.endDate}</span>
        </p>
        <p className="body">{props.description}</p>
      </div>
    </div>
  );
}
