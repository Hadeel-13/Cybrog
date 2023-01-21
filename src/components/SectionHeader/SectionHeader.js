import "./SectionHeader.css";
const SectionHeader = (props) => {
  return (
    <>
      <div className="section-header">
        <h4 className="fs-1 fw-900">{props.children}</h4>
      </div>
    </>
  );
};

export default SectionHeader;
