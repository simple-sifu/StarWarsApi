import Card from "../Card/Card";
import "./CardContainer.styles.css";

const CardContainer = ({ people }) => {
  return (
    <div className="container">
      {people.map((profile) => {
        return <Card profile={profile} key={profile.name} />;
      })}
    </div>
  );
};

export default CardContainer;
