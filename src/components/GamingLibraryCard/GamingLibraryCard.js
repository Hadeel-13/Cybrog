import "./GamingLibraryCard.css";
import { SecondaryButton } from "../index";
const GamingLibraryCard = (props) => {
  return (
    <div className="gaming-library-card" style={{flex:"1 1 100%"}}>
      <ul className="list-unstyled d-flex justify-content-between align-items-center flex-wrap gap-4 border-bottom py-3">
        <li>
          <img src={props.image} alt={props.image} />
        </li>
        <li>
          <h4>{props.title}</h4>
          <span className="fs-6">{props.category}</span>
        </li>
        <li>
          <h4>Data Added</h4>
          <span className="fs-6">{props.data_added}</span>
        </li>
        <li>
          <h4>Hours Played</h4>
          <span className="fs-6">{props.hours_played}</span>
        </li>
        <li>
          <h4>Currently</h4>
          <span className="fs-6">{props.downloaded}</span>
        </li>
        <SecondaryButton>Downloaded</SecondaryButton>
      </ul>
    </div>
  );
};

export default GamingLibraryCard;
