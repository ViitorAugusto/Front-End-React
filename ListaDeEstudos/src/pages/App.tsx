
import { Cronometro } from "../components/Cronometro";
import { Form } from "../components/Form";
import { List } from "../components/List";

import style from "./App.module.scss";

function App() {
  return (
    
    <div className={style.AppStyle}>

      <Form />
      <List />
      <Cronometro />
    </div>

  );
}

export default App;
