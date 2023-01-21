import "./Card.css";
import { FaStar, FaDownload } from "react-icons/fa";
const Card = (props) => {
  return (
    <>
      <div className="most-popular-item" style={{ flex: "1 25%" }}>
        <div className="card-wrapper bg-cdark rounded-3 p-3 m-3">
          <img
            className="most-popular-item-img rounded-1 w-100 mb-2"
            src={props.image}
            alt={props.image}
          />
          <div className="most-popular-item-content d-flex justify-content-between">
            <h5 className="most-popular-item-title">
              {props.title}
              <br />
              <span className="fs-6">{props.category}</span>
            </h5>
            <ul className="list-unstyled">
              <li>
                <span className="text-warning">
                  <FaStar />
                </span>
                &nbsp;<span>{props.rate}</span>
              </li>
              <li>
                <span className="text-danger">
                  <FaDownload />
                </span>
                &nbsp;<span>{props.download}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;