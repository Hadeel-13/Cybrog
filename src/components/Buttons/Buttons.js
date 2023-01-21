import './Buttons.css';

const PrimaryButton = (props) => {
  return (
    <div className="button primary-button">
      <a className="text-decoration-none link-light py-2 px-3 rounded-5 bg-cprimary" href="/#">{props.children}</a>
    </div>
  );
};

export default PrimaryButton;

const SecondaryButton = (props) => {
  return (
    <div className="button secondary-button">
      <a className="text-decoration-none link-light py-2 px-3 rounded-5 border border-cprimary" href="/#">{props.children}</a>
    </div>
  );
};
export { SecondaryButton };
