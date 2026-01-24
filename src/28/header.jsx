// JSX
// JS + X
// JS = Java Script
// X = XML
// JSX = JS + HTML in acelasi fisier

// !IMPORTANT - un singur fisier JSX tine o singura componenta
// 2. numele componentei sa se reflecte cu numele fisierului
// 3. toate componentele react trebuie sa inceapa cu litera mare
export function addTwo(a, b) {
  return a + b;
}

import { HelloText } from "./hello-text";

// in html ce este cu = "" este text sau string
// daca avem nevoie de a accesa o variabila folosim {}

// props - proprietati
// props = obiect
// obiect.proprietate
export function Header({ userName }) {
// 1. partea unde putem face magie cu JS
function buna() {
    console.log('buna ziua', userName);
}

const UserNameUpdated = userName + ' Familia '
// 2. este in return unde avem HTML | html + js
  return <HelloText userName={UserNameUpdated} />
}
