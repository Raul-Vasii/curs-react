import { create } from "zustand";

export const useVoteStore = create((set) => ({
  votes: 0,
  upVote: () => set((state) => ({ votes: state.votes + 1 })),
  downVote: () => set((state) => ({ votes: state.votes - 1 })),
}));
