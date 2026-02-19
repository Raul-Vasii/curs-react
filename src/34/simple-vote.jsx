import { useContextVotes } from "./use-context-votes";

// Ori de cate ori apelam o componenta react.
// Practic se monteaza o componenta noua.
export function SimpleVote() {
  //   const { votes, upVote, downVote } = useSimpleVote(0);
  const { votes, downVote, upVote } = useContextVotes();

  // Determinăm culoarea textului în funcție de numărul de voturi
  const voteColor =
    votes > 0 ? "text-green-600" : votes < 0 ? "text-red-600" : "text-gray-700";

  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 w-48 transition-all hover:shadow-2xl">
        {/* Buton UpVote */}
        <button
          onClick={upVote}
          className="group flex flex-col items-center justify-center w-full py-3 bg-emerald-50 text-emerald-700 rounded-xl font-bold transition-all hover:bg-emerald-600 hover:text-white active:scale-95 shadow-sm"
        >
          <span className="text-xl group-hover:-translate-y-1 transition-transform">
            ▲
          </span>
          <span className="text-xs uppercase tracking-wider">UpVote</span>
        </button>

        {/* Display Voturi */}
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">
            Scor
          </span>
          <p className={`text-4xl font-black tabular-nums ${voteColor}`}>
            {votes}
          </p>
        </div>

        {/* Buton DownVote */}
        <button
          onClick={downVote}
          className="group flex flex-col items-center justify-center w-full py-3 bg-rose-50 text-rose-700 rounded-xl font-bold transition-all hover:bg-rose-600 hover:text-white active:scale-95 shadow-sm"
        >
          <span className="text-xs uppercase tracking-wider">DownVote</span>
          <span className="text-xl group-hover:translate-y-1 transition-transform">
            ▼
          </span>
        </button>
      </div>
    </div>
  );
}
