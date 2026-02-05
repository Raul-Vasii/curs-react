export function Cursuri() {
  const cursuri = [
    { id: 101, titlu: "Introducere în React", categorie: "Programare" },

    { id: 102, titlu: "Design UI/UX", categorie: "Design" },

    { id: 103, titlu: "Baze de Date SQL", categorie: "Programare" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cursurile Mele</h1>
    {/* Tema 30 linia 14 */}
      {cursuri.length === 0 && <p>Nu exista cursuri disponibile.</p>} 

      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* PASUL 2 & 3: Folosește .map() aici pentru a genera lista */}

        {cursuri.map((curs) => {
          return (
            <li key={curs.id} className="curs-item">
              {curs.titlu}
            </li>
          );
        })}

        {/* Exemplu de structură dorită pentru fiecare curs:

            <li className="curs-item"> 📚 Titlu Curs </li> 

        */}
      </ul>

      {/* PASUL 4: Nu uita de atributul 'key' pe <li>! */}
    </div>
  );
}
