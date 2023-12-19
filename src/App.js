import "./App.css";

import Person from "./christmas/Person";
import Button from "./components/Button";

function App() {
  return (
    <div className="main" style={{backgroundImage:"url('bild4.jpg')"}}>
      <Person name="Weihnachten" description="24.12.2023" />
      <Person name="Meine Wunschliste" description="von Samuel Meusburger" />
      <Button name="Sam will" age="eine Kiste Kölbö" />
      <Button name="Sam will" age="An oasar i Mathe" />
      <Button name="Sam will" age=" einen Leberkäs Semmel mit Ketchup Majo" />
      <Button name="Sam will" age=" eine Rote Ampel" />
      </div>

  );
}

export default App;
