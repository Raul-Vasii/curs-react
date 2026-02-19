import { useState } from "react";
import { VoteContext } from "./vote-context";

// 1. Crearea context
// export const VoteContext = createContext();

// 2. Cum expunem datele
// Provider = componenta react
//
export function VoteProvider({ children }) {
  // Pasul 1: Inițializarea stării
  const [votes, setVotes] = useState(0);

  // Pasul 2: Implementarea funcției Upvote
  const upVote = () => {
    setVotes(votes + 1);
  };

  // Pasul 3: Implementarea funcției Downvote
  const downVote = () => {
    setVotes(votes - 1);
  };

  return (
    <VoteContext.Provider value={{ votes, upVote, downVote }}>
      {children}
    </VoteContext.Provider>
  );
}

// <input />

// <div>
//  <span></span>
// </div>

// <VoteContext.Provider /> v1

// V2
// <VoteContext.Provider>
// </VoteContext.Provider>

// 3. Cum folosim datele
// Ca sa accesam datele din context folosim un hook = useContext
//  1. parametru - contextul de unde sa scoata datele
// useContext(TestContext)

// export function useVotesCount() {
//   return useContext(VoteContext);
// }

// useVotesCount() -> useContext(TestContext)
