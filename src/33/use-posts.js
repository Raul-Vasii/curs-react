// 1 singur fisier -> 1 singur custom hook
// numele fisierului sa reflecte numele hook-ului
// hook-ul in react obligariu incepe cu cuvantul use

import axios from "axios";
import { useEffect, useState } from "react";

// posts - functie ajutatoare
// usePosts - hook din react

// hookurile nu returneaza html returneaza doar date
// JSX = JS + HTML
// hookurile ======== JS
// extensia fisierilor de hookuri este .js si nu .jsx

export function usePosts() {
  const [posts, setPosts] = useState([]);
  /* 
      useEffect(() => {
    // axios - curierul nostru DHL pentru a aduce date de la server
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data) // = posts = response.data
    });
    console.log("buna ziua");
  }, []);
    */

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data); // = posts = response.data
    });
  }, []);

  return posts;
}
