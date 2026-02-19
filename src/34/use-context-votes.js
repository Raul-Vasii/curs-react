// import { useEffect } from "react";

import { useContext } from "react";
import { VoteContext } from "./vote-context";

// export function useObserve() {
//     useEffect(() => {
//         console.log('modificat')
//     }, [])
// }

export function useContextVotes() {
  return useContext(VoteContext);
}

// useContext(VoteContext) => useContextVotes();
