import "./styles.css";
import { useEffect, useState } from "react";
import CardContainer from "./component/CardContainer/CardContainer";
export default function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("https://swapi.py4e.com/api/people")
      .then((response) => response.json())
      .then((data) => setPeople(data.results));
  }, []);
  return (
    <div className="App">
      <CardContainer people={people} />
    </div>
  );
}
