import "./SectionWrapper.css";

const SectionWrapper = (props) => {
  return (
    <>
      <div className="section-wrapper bg-cdarkset rounded-5 p-5 mt-5">
        {props.children}
      </div>
    </>
  );
};

export default SectionWrapper;
