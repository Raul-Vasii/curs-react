// useState

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

// let posts = [];

    // const lin = `id ${}`

// useEffect
export function Posts() {
  const [posts, setPosts] = useState([]); // = // let posts = [];
  // useEffect
  // 2 parametrii
  // 1. O functie callback
  // un array de dependinta
  // 1. [] = se va efectua sau se va rula doar dupa ce componenta se monteaza
  // [] = daca vrem request la server folosim useEffect cu [] gol
  // 2. [todos] = se va rula ori de cate ori acel todos este schimbat

  useEffect(() => {
    // axios - curierul nostru DHL pentru a aduce date de la server
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data); // = posts = response.data;
    });
    console.log("buna ziua");
  }, []);

  console.log(posts, "posts");

  return (
   <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b pb-4">
          Postările Mele
        </h1>
        
        {/* Grid layout: 1 coloană pe mobil, 2 pe tabletă, 3 pe desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  User {post.userId}
                </span>
                <span className="text-gray-400 text-xs ml-auto">#{post.id}</span>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-3 capitalize leading-tight">
                {post.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {post.body}
              </p>

                <Link to={`/posts/${post.id}`} className="mt-5 text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center">
                Citește mai mult 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
