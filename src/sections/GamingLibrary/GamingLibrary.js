import "./GamingLibrary.css";
import { GamingLibraryCard, SectionHeader, SectionWrapper } from "../../components/index";
import GamingLibraryData from'../../Data/GamingLibraryData'
const GamingLibrary = () => {
  const cards = GamingLibraryData.map((card) => {
    return (
      <GamingLibraryCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        data_added={card.data_added}
        hours_played={card.hours_played}
        downloaded={card.downloaded}
      />
    );
  });
  return (
    <>
      <SectionWrapper>
        <SectionHeader>GamingLibrary</SectionHeader>
        <div className="d-flex justify-content-between flex-wrap">
          {cards}
        </div>
      </SectionWrapper>
    </>
  );
};
export default GamingLibrary;
