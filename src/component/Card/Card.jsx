import "./Card.styles.css";

const Card = ({ profile }) => {
  return (
    <div className="card">
      <h1>Name: {profile.name}</h1>
      <h1>Height: {profile.height}</h1>
      <h1>Hair-Color: {profile.hair_color}</h1>
      <h1>Birth Year: {profile.birth_year}</h1>
    </div>
  );
};
export default Card;
