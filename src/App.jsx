import "./App.css";

import { Header } from "./28/header";

import UserItemCard from "./28/user-item"

import { Click } from "./29/click"

import { Input } from "./29/input"
import { HtmlFor } from "./29/html-for";
import { State } from "./29/state";

import { ToggleButton } from "./29-tema/E1-butonDeToggle";
import { LiveInput } from "./29-tema/E2-InputControlled";
import { CounterCuLimita } from "./29-tema/E3-CounterCuLimită";
import { Todos } from "./30/todos";
import { Cursuri } from "./30/cursuri";

function App() {
  // console.log(addTwo(1, 2), "rezultat adunare");

  return (
    // SESIUNEA 30
    <>
     <Todos />
     <Cursuri/>

    </>

    // SESIUNEA 29
    // <>
    // <HtmlFor />
    // <Click />
    // <Input />
    // <State />
    // <ToggleButton />
    // <LiveInput />
    // <CounterCuLimita />
    // </>
    // <>
    // SESIUNEA 28
    //   <input id="" className="" />

    //   <Header userName='Vasi' />
    //   <Header userName='Radu' />
    //   <Header userName='Alex' />

    //   <UserItemCard name="Dol" email="test" comment="test" />
    //   <UserItemCard name="Typ" email="test" comment="test" />
    //   <UserItemCard name="Tel" email="test" comment="test" />    </>'
  );
}

export default App;
