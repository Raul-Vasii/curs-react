import "./App.css";

import { Header } from "./28/header";

import UserItemCard from "./28/user-item";

import { Click } from "./29/click";

import { Input } from "./29/input";
import { HtmlFor } from "./29/html-for";
import { State } from "./29/state";

import { ToggleButton } from "./29-tema/E1-butonDeToggle";
import { LiveInput } from "./29-tema/E2-InputControlled";
import { CounterCuLimita } from "./29-tema/E3-CounterCuLimită";
import { Todos } from "./30/todos";
import { Cursuri } from "./30/cursuri";
import { VoteProvider } from "./34/vote-provider";
import { SimpleVote } from "./34/simple-vote";

import { Tailwind } from "./31/tailwind";
import { BearCounter, Controls } from "./35/bear";
import { LightToggle } from "./35/light-toggle";
import { ThemeToggle } from "./35/theme-toggle";
import { MagazinModern } from "./35/magazin-modern";

function App() {
  // console.log(addTwo(1, 2), "rezultat adunare");

  return (
    <>
      {/* SESIUNEA 35 */}
   <BearCounter />
      <Controls />
      <hr />
      <LightToggle/>
      <hr />
      <ThemeToggle />
      <hr />
      <MagazinModern />


      {/* SESIUNEA 30 + 31 + 34 */}
      {/* <Todos />
      <Tailwind />
      <VoteProvider>
        <SimpleVote />
      </VoteProvider>
      <Cursuri /> */}
    </>
  );
}

export default App;
