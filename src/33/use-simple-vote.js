import { useState } from "react";

export function useSimpleVote(initialValue) {
  const [votes, setVotes] = useState(initialValue);

  const upVote = () => {
    setVotes(votes + 1);
  };

  const downVote = () => {
    setVotes(votes - 1);
  };

  return { votes, upVote, downVote };
}
