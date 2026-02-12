import { Link } from "react-router";
import { usePosts } from "../33/use-posts";
import { useToggle } from "../33/use.toggle";

export function Posts() {
  const { posts, isLoading, error } = usePosts();
  const [isOpen, toggleIsOpen] = useToggle(true);

  if (isLoading) {
    return <p className="p-8">Se incarca postarile...</p>;
  }

  if (error) {
    return <p className="p-8 text-red-600">A aparut o eroare la incarcare.</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b pb-4">
          Postarile Mele
        </h1>

        <button
          onClick={toggleIsOpen}
          className="mb-6 bg-black text-white px-4 py-2 rounded"
        >
          Toggle lista
        </button>

        {isOpen && (
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

                <Link
                  to={`/posts/${post.id}`}
                  className="mt-5 text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center"
                >
                  Citeste mai mult
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
