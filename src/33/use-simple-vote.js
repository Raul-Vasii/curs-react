import { useState } from "react";

export function useSimpleVote(initialValue) {
  // Pasul 1: Inițializarea stării
  const [votes, setVotes] = useState(initialValue);

  // Pasul 2: Implementarea funcției Upvote
  const upVote = () => {
    setVotes(votes + 1);
  };

  // Pasul 3: Implementarea funcției Downvote
  const downVote = () => {
    setVotes(votes - 1);
  };

  // Pasul 4: Returnarea obiectului cu datele necesare
  return { votes, upVote, downVote };
}
