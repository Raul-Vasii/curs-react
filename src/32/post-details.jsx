import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export function PostDetails() {
  const params = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`,
      )
      .then((response) => {
        setComments(response.data);
      });
  }, [params.postId]);

  console.log(params);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Comentarii Recente
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {comments.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 p-6 flex flex-col"
          >
            <div className="flex-1">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Post ID: {item.postId}
              </span>
              <h2 className="text-xl font-bold text-gray-900 mt-2 mb-3 capitalize leading-tight">
                {item.name.substring(0, 50)}...
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4 italic">
                "{item.body}"
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 truncate mr-2">
                {item.email}
              </span>

              {/* Link-ul către pagina de detalii */}
              <Link
                to={`/posts/${item.postId}`}
                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Detalii
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
