import { useShopStore } from "./use-shop-store";

export function MagazinModern() {
  // Extragem doar ce ne trebuie (Selectori)

  const { balanta, totalPlata, cos, adaugaProdus, golesteCosul } =
    useShopStore();

  return (
    <div className="p-8 bg-gray-100 min-h-screen font-sans">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Cafeneaua Zustand
        </h2>

        {/* Afișaj Balanță */}

        <div className="flex justify-between mb-6 p-4 bg-blue-50 rounded-lg">
          <div>
            <p className="text-sm text-blue-600 font-semibold uppercase">
              Balanță
            </p>

            <p
              className={`text-2xl font-black ${balanta < 50 ? "text-red-500" : "text-green-600"}`}
            >
              {balanta} RON
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500 uppercase font-semibold">
              Total Coș
            </p>

            <p className="text-2xl font-black text-gray-800">
              {totalPlata} RON
            </p>
          </div>
        </div>

        {/* Butoane Produse */}

        <div className="grid grid-cols-1 gap-3 mb-6">
          <button
            onClick={() => adaugaProdus("Cafea", 20)}
            className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all active:scale-95 font-medium"
          >
            ☕ Cumpără Cafea (20 RON)
          </button>

          <button
            onClick={() => adaugaProdus("Sandwich", 35)}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all active:scale-95 font-medium"
          >
            🥪 Cumpără Sandwich (35 RON)
          </button>

          <button
            onClick={() => adaugaProdus("Laptop de Aur", 480)}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all active:scale-95 font-medium"
          >
            💻 Laptop Special (480 RON)
          </button>
        </div>

        {/* Listă produse și Reset */}

        <div className="border-t pt-4">
          <p className="text-sm text-gray-400 mb-2 italic">
            Produse în coș: {cos.length}
          </p>

          <button
            onClick={golesteCosul}
            className="text-sm text-red-500 hover:underline font-semibold"
          >
            Golește tot și pleacă acasă
          </button>
        </div>
      </div>
    </div>
  );
}
