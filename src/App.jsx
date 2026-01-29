import "./App.css";

import { Header } from "./28/header";

import UserItemCard from "./28/user-item"

import { Click } from "./29/click"

import { Input } from "./29/input"
import { HtmlFor } from "./29/html-for";
import { State } from "./29/state";

function App() {
  // console.log(addTwo(1, 2), "rezultat adunare");

  return (

    <>
    <HtmlFor />
    <Click />
    <Input />
    <State />
    </>
    // <>
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
