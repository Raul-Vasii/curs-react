import "./App.css";

import { Header } from "./28/header";

import UserItemCard from "./28/user-item"

function App() {
  // console.log(addTwo(1, 2), "rezultat adunare");

  return (
    <>
      <input id="" className="" />

      <Header userName='Vasi' />
      <Header userName='Radu' />
      <Header userName='Alex' />

      <UserItemCard name="Dol" email="test" comment="test" />
      <UserItemCard name="Typ" email="test" comment="test" />
      <UserItemCard name="Tel" email="test" comment="test" />    </>
  );
}

export default App;
