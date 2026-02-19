import { create } from "zustand";


export const useShopStore = create((set) => ({
  balanta: 500,
  cos: [],
  totalPlata: 0,

  adaugaProdus: (nume, pret) =>
    set((state) => {
      if (pret > state.balanta) {
        alert("Fonduri insuficiente!");
        return state;
      }

      return {
        balanta: state.balanta - pret,
        cos: [...state.cos, { nume, pret }],
        totalPlata: state.totalPlata + pret,
      };
    }),

  golesteCosul: () =>
    set({
      balanta: 500,
      cos: [],
      totalPlata: 0,
    }),
}));
