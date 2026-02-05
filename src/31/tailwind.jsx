// Pasul 1: Max-Width, Margin, Padding.
// Pasul 2: Background Color, Border Radius, Box Shadow, Margin.
// Pasul 3: Flex, Align Items, Justify Content.
// Pasul 4: Text Color, Line Height.

// SCOP: Căutați în documentație clasele potrivite pentru fiecare cerință


export function Tailwind() {
  return (
     // 1. Container: Setați o lățime maximă, centrați pe orizontală și adăugați spațiere interioară (padding)
    <div className="max-w-xl mx-auto p-8">
      {/* 2. Card: Fundal alb, colțuri rotunjite, efect de umbră și spațiere exterioară jos */}
      <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
         {/* 3. Header: Aliniați elementele pe același rând, puneți spațiu maxim între ele și centrați-le vertical */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-blue-600">Nume Utilizator</span>
          <span className="text-gray-500 text-sm">Acum 2 ore</span>
        </div>

            {/* 4. Text: Schimbați culoarea textului în gri închis și măriți distanța dintre rândurile de text */}
        <p className="text-gray-700 leading-relaxed">
           Acesta este un comentariu de test. Tailwind ne ajută să stilizăm rapid 

          fără să mai scriem fișiere CSS separate!
        </p>
      </div>
    </div>
  );
}
