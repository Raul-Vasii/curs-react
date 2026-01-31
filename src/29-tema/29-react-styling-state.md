# React: Styling, Evenimente și State

> Învață cum să stilizezi componente, să gestionezi evenimente și să folosești state în React

---

## 📚 Cuprins

1. [className și style în JSX](#-classname-și-style-în-jsx)
2. [Evenimente în React](#-evenimente-în-react)
3. [useState - Memoria Componentei](#-usestate---memoria-componentei)
4. [Recapitulare](#-recapitulare)

---

## 🎨 className și style în JSX

### De ce sunt diferite?

**Imaginează-ți că HTML și JavaScript sunt doi colegi de cameră.**

Când amândoi vor să folosească același cuvânt, HTML cedează politicos și își găsește un sinonim.

### class → className

```jsx
// ❌ HTML normal (nu funcționează în React):
<div class="container"></div>

// ✅ JSX (React):
<div className="container"></div>
```

**De ce schimbarea?**
- Cuvântul `class` e rezervat în JavaScript pentru clase (OOP)
- React folosește `className` să nu creeze confuzie

**Exemplu practic:**

```jsx
export function HtmlFor() {
  return (
    <div>
      <label htmlFor="x">Prenume:</label>
      <input id="x" type="text" className="input-field" />
    </div>
  );
}
```

### for → htmlFor

```jsx
// ❌ HTML normal:
<label for="username">Nume:</label>

// ✅ JSX (React):
<label htmlFor="username">Nume:</label>
```

**De ce?**
- `for` e cuvânt rezervat în JavaScript (pentru bucle: `for (let i = 0; i < 10; i++)`)
- React folosește `htmlFor` pentru a evita conflictul

### style - De la string la obiect

**În HTML clasic, style este un string:**

```html
<div style="background-color: red; font-size: 20px;"></div>
```

**În React, style este un OBIECT JavaScript:**

```jsx
<div style={{
  backgroundColor: "red",
  fontSize: "20px"
}}></div>
```

**Explicație pas cu pas:**

1. **Două acolade `{{}}`**
   - Prima `{}` = spune "Aici e JavaScript!"
   - A doua `{}` = obiectul JavaScript propriu-zis

2. **Proprietățile CSS devin camelCase**
   - `background-color` → `backgroundColor`
   - `font-size` → `fontSize`
   - `border-radius` → `borderRadius`

**De ce camelCase?**
- În JavaScript, liniuțele `-` nu sunt permise în numele proprietăților
- `background-color` nu e valid, dar `backgroundColor` e perfect

**Exemplu complet din codul nostru:**

```jsx
export function HtmlFor() {
  return (
    <div
      style={{
        backgroundColor: "red",
      }}
    >
      <label htmlFor="x">Prenume:</label>
      <input id="x" type="text" />
      <hr />
    </div>
  );
}
```

**Ce se întâmplă aici:**

1. **`style={{ backgroundColor: "red" }}`**
   - Două acolade: prima pentru JSX, a doua pentru obiect
   - Creezi un obiect JavaScript: `{ backgroundColor: "red" }`
   - React transformă asta în CSS pentru browser

2. **`htmlFor="x"`**
   - Leagă label-ul de input
   - Când dai click pe "Prenume:", cursorul merge în input cu `id="x"`

3. **Fluxul complet:**
   ```
   User vede: Label "Prenume:" și un input cu fundal roșu
   User dă click pe "Prenume:"
   Browser: "Ah, htmlFor='x' înseamnă input cu id='x'"
   Cursorul apare în input
   ```

### 🎯 Rezumat rapid

| HTML Clasic | JSX (React) | Motiv |
|-------------|-------------|-------|
| `class` | `className` | `class` e rezervat în JS |
| `for` | `htmlFor` | `for` e rezervat în JS |
| `style="color: red"` | `style={{ color: "red" }}` | JSX folosește obiecte JS |
| `background-color` | `backgroundColor` | Proprietăți JS sunt camelCase |

---

## 🎪 Evenimente în React

### Ce sunt evenimentele?

**Gândește-te la evenimente ca la o sonerie:**
- Când cineva apasă butonul (evenimentul), tu reacționezi deschizând ușa (funcția).
- În React, soneria e pusă DIRECT pe buton!

### Adio `addEventListener`! 👋

**În JavaScript vanilla (normal):**

```javascript
// Pasul 1: Găsești elementul
const button = document.getElementById("myButton");

// Pasul 2: Adaugi event listener
button.addEventListener("click", function() {
  console.log("Butonul a fost apăsat!");
});
```

**În React:**

```jsx
// Totul într-un singur loc!
<button onClick={handleClick}>Apasă-mă</button>
```

**De ce e mai bine?**
- Mai simplu, mai curat, totul în același loc
- Nu trebuie să cauți elemente în DOM
- React se ocupă automat de curățenie când componenta dispare

### Cele mai folosite evenimente

#### 1️⃣ onClick - Click-ul șoricelului 🖱️

```jsx
export function Click() {
  function handleClick() {
    console.log("Userul a dat click");
  }

  return <button onClick={handleClick}>Apasa</button>;
}
```

**Explicație pas cu pas:**

1. **`function handleClick()`**
   - Creezi o funcție care se va executa la click
   - Nu o apelezi TU manual - React o va apela

2. **`onClick={handleClick}`**
   - Trimiți REFERINȚA funcției (fără paranteze `()`)
   - ❌ Greșit: `onClick={handleClick()}` - asta o apelează IMEDIAT
   - ✅ Corect: `onClick={handleClick}` - asta o trimite lui React să o apeleze mai târziu

3. **Când se execută?**
   - React păstrează funcția
   - Când userul dă click, React apelează: `handleClick()`

**Cine apelează `handleClick`?**
- **React** o apelează automat când detectează click-ul
- Tu doar dai "rețeta", React o execută

**Fluxul complet:**
```
1. Componenta se încarcă
   ↓
2. React vede onClick={handleClick}
   ↓
3. React salvează: "Când e click, apelează handleClick"
   ↓
4. User dă click pe buton
   ↓
5. Browser detectează click-ul
   ↓
6. React primește notificarea
   ↓
7. React apelează: handleClick()
   ↓
8. Console-ul afișează: "Userul a dat click"
```

#### 2️⃣ onScroll - Derulare 📜

```jsx
export function Scroll() {
  function handleScroll() {
    console.log("Userul derulează pagina");
  }

  return <div onScroll={handleScroll}>Conținut lung...</div>;
}
```

**Când se folosește:**
- Detectare scroll infinit (ca pe Instagram sau Facebook)
- Afișare buton "Înapoi sus" când scroll-ezi
- Animații care apar când scroll-ezi

#### 3️⃣ onChange - Input modificat ⌨️

```jsx
export function Input() {
  function handleChange(event) {
    console.log("Tastat:", event.target.value);
  }
  
  return <input type="text" onChange={handleChange} />;
}
```

**Explicație detaliată:**

1. **`function handleChange(event)`**
   - Funcția primește automat un parametru: `event`
   - `event` = obiect cu informații despre ce s-a întâmplat

2. **`event.target.value`**
   - `event.target` = elementul care a declanșat evenimentul (input-ul)
   - `.value` = textul scris în input

3. **Când se execută?**
   - De fiecare dată când scrii o literă în input
   - React apelează: `handleChange(eventObject)`

**Cine apelează `handleChange`?**
- **React** o apelează automat când detectează modificarea în input
- **React** creează obiectul `event` și îl trimite funcției tale

**Exemplu pas cu pas:**

```
User scrie "a" → React apelează handleChange(event)
                → event.target.value = "a"
                → Console: "Tastat: a"

User scrie "b" → React apelează handleChange(event)
                → event.target.value = "ab"
                → Console: "Tastat: ab"

User scrie "c" → React apelează handleChange(event)
                → event.target.value = "abc"
                → Console: "Tastat: abc"
```

**Fluxul complet:**
```
User scrie "H"
   ↓
Input-ul se modifică
   ↓
Browser detectează modificarea
   ↓
React primește notificarea
   ↓
React creează obiectul event: { target: { value: "H" } }
   ↓
React apelează: handleChange(event)
   ↓
Console: "Tastat: H"

User scrie "e" (acum e "He")
   ↓
React apelează: handleChange(event)
   ↓
Console: "Tastat: He"

User scrie "l" (acum e "Hel")
   ↓
React apelează: handleChange(event)
   ↓
Console: "Tastat: Hel"
```

### 🎯 Regula de aur pentru evenimente

```jsx
// ✅ CORECT - Trimite referința:
<button onClick={handleClick}>Click</button>

// ❌ GREȘIT - Apelează funcția IMEDIAT (fără să vrei):
<button onClick={handleClick()}>Click</button>

// ✅ CORECT - Dacă vrei să trimiți parametri, folosește funcție arrow:
<button onClick={() => handleClick("parametru")}>Click</button>
```

### 📊 Tabel evenimente HTML → React

| HTML | React | Folosit pentru |
|------|-------|----------------|
| `onclick` | `onClick` | Click mouse |
| `onchange` | `onChange` | Input modificat |
| `onsubmit` | `onSubmit` | Trimitere formular |
| `onscroll` | `onScroll` | Derulare pagină |
| `onmouseover` | `onMouseOver` | Mouse peste element |
| `onkeydown` | `onKeyDown` | Tastă apăsată |

**Regula:** Toate evenimentele din React sunt **camelCase** (prima literă mică, restul cuvintelor cu majusculă).

---

## 💾 useState - Memoria Componentei

### Ce este state-ul?

**State-ul e ca un întrerupător de lumină: poate fi pornit sau oprit.**

Când îl apeși (modifici state-ul), camera (componenta) se schimbă instant!

### Problema fără useState

**Gândește-te la asta ca la o poveste:**

```jsx
export function Test() {
  let value = 0;  // Variabilă normală

  function handleClick() {
    value = value + 1;  // Schimb valoarea
    console.log(value); // Afișează 1, 2, 3...
  }

  return <button onClick={handleClick}>Clicked: {value}</button>;
  // Problema: Pe ecran rămâne mereu 0! 😱
}
```

**Ce se întâmplă?**
1. Dai click → `value` devine 1
2. Console-ul afișează: `1` ✅
3. DAR pe ecran tot `0` apare! ❌

**De ce?**
- React nu știe că `value` s-a schimbat
- React nu redesenează componenta
- E ca și cum ai schimba mobila în cameră, dar nimeni nu vede pentru că luminile sunt stinse!

### Soluția: useState

**useState e ca un semafor care spune React-ului: "Atenție, ceva s-a schimbat, redesenează!"**

```jsx
import { useState } from "react";

export function State() {
  const [value, setValue] = useState(0);

  function handleClick() {
    setValue(value + 1);
  }

  return <button onClick={handleClick}>Clicked: {value}</button>;
  // Acum funcționează perfect! 🎉
}
```

### Cum funcționează useState pas cu pas

#### Pasul 1: Importă hook-ul

```jsx
import { useState } from "react";
```

**Ce înseamnă "hook"?**
- Orice funcție din React care începe cu `use` = hook
- `useState`, `useEffect`, `useContext` - toate sunt hook-uri
- Hook-urile dau "superputeri" componentelor tale

#### Pasul 2: Declară state-ul

```jsx
const [value, setValue] = useState(0);
```

**Anatomia acestei linii:**

```jsx
const [value, setValue] = useState(0);
      ↑      ↑              ↑        ↑
      │      │              │        │
   citesc  modific      funcția   valoarea
   state   state-ul     React    inițială
```

**Explicație detaliată:**

1. **`useState(0)`**
   - Apelezi funcția `useState` cu valoarea inițială `0`
   - React creează un "slot" de memorie pentru această componentă

2. **`[value, setValue]`**
   - `useState` returnează un array cu 2 elemente
   - Primul element (`value`) = valoarea curentă
   - Al doilea element (`setValue`) = funcția care schimbă valoarea

3. **Destructuring**
   ```jsx
   // Fără destructuring (complicat):
   const stateArray = useState(0);
   const value = stateArray[0];
   const setValue = stateArray[1];

   // Cu destructuring (simplu):
   const [value, setValue] = useState(0);
   ```

#### Pasul 3: Folosește și actualizează state-ul

```jsx
function handleClick() {
  setValue(value + 1);  // Modifică state-ul
}

return <button onClick={handleClick}>Clicked: {value}</button>;
```

**Ce se întâmplă când apeși butonul:**

```
1. User dă click
   ↓
2. React apelează handleClick()
   ↓
3. handleClick apelează setValue(value + 1)
   ↓
4. React primește noua valoare
   ↓
5. React spune: "State-ul s-a schimbat, redesenez componenta!"
   ↓
6. React apelează din nou funcția State() cu noua valoare
   ↓
7. Componenta se redesenează cu valoarea nouă
   ↓
8. Pe ecran apare noul număr! 🎉
```

### 🔄 Fluxul complet cu exemplu din cod

```jsx
import { useState } from "react";

export function State() {
  const [value, setValue] = useState(0);

  function handleClick() {
    setValue(value + 1);
  }

  console.log(value, 'value');  // Vezi valoarea în console

  return (
    <div>
      <hr />
      <button onClick={handleClick}>Clicked: {value}</button>
    </div>
  );
}
```

**Scenariul pas cu pas:**

**Primul render (încărcare inițială):**
```
1. React apelează State()
2. useState(0) creează state cu valoarea 0
3. value = 0
4. Console: "0 value"
5. Pe ecran: "Clicked: 0"
```

**Dai primul click:**
```
1. User dă click
2. React apelează handleClick()
3. handleClick apelează setValue(0 + 1) → setValue(1)
4. React: "State schimbat! Redesenez!"
5. React apelează din nou State()
6. value = 1 (React își amintește noua valoare)
7. Console: "1 value"
8. Pe ecran: "Clicked: 1"
```

**Dai al doilea click:**
```
1. User dă click
2. React apelează handleClick()
3. handleClick apelează setValue(1 + 1) → setValue(2)
4. React: "State schimbat! Redesenez!"
5. React apelează din nou State()
6. value = 2
7. Console: "2 value"
8. Pe ecran: "Clicked: 2"
```

### 📊 Vizualizare completă

```
RENDER INIȚIAL:
├─ React apelează State()
├─ useState(0) → value = 0, setValue = funcție
├─ console.log → "0 value"
└─ Return: <button>Clicked: 0</button>

USER DĂ CLICK #1:
├─ Browser detectează click
├─ React apelează handleClick()
├─ handleClick apelează setValue(1)
└─ React: "Redesenez!"

RE-RENDER #1:
├─ React apelează State()
├─ useState returnează value = 1
├─ console.log → "1 value"
└─ Browser actualizează: "Clicked: 1"

USER DĂ CLICK #2:
├─ React apelează handleClick()
├─ handleClick apelează setValue(2)
└─ React: "Redesenez!"

RE-RENDER #2:
├─ React apelează State()
├─ useState returnează value = 2
├─ console.log → "2 value"
└─ Browser actualizează: "Clicked: 2"
```

### 🎯 Reguli importante pentru useState

#### 1. State-ul e privat pentru fiecare componentă

```jsx
<State />  // Are propriul său value = 0
<State />  // Are propriul său value = 0 (diferit de primul!)
<State />  // Are propriul său value = 0 (diferit de primele două!)
```

**Fiecare componentă are propria memorie, separată de celelalte!**

**Analogie:** E ca trei case diferite. Fiecare casă are propriul său întrerupător de lumină. Când apeși întrerupătorul în Casa 1, luminile din Casa 2 și Casa 3 nu se schimbă!

#### 2. Nu modifica state-ul direct!

```jsx
// ❌ GREȘIT - Nu face așa:
value = value + 1;

// ✅ CORECT - Folosește funcția setter:
setValue(value + 1);
```

**De ce?**
- Modificarea directă nu anunță React-ul
- React nu va redesena componenta
- E ca și cum ai schimba mobilele în cameră pe întuneric - nimeni nu vede!

**Comparație:**

```jsx
// Varianta GREȘITĂ:
let value = 0;
function handleClick() {
  value = value + 1;  // Se schimbă în memorie
  console.log(value); // Afișează 1, 2, 3...
}
// Rezultat: Console afișează corect, dar pe ecran rămâne 0

// Varianta CORECTĂ:
const [value, setValue] = useState(0);
function handleClick() {
  setValue(value + 1);  // Anunță React-ul
}
// Rezultat: Și console și ecranul se actualizează corect
```

#### 3. Hook-urile se apelează doar la top-level

```jsx
// ✅ CORECT:
function State() {
  const [value, setValue] = useState(0);
  // restul codului
}

// ❌ GREȘIT - Nu pune useState în if, for, sau alte funcții:
function State() {
  if (condition) {
    const [value, setValue] = useState(0);  // NU FACE ASTA!
  }
}
```

**De ce?**
- React se bazează pe ordinea în care sunt apelate hook-urile
- Dacă pui hook-uri în if/for, ordinea se schimbă → React se confundă

### 🎨 Exemplu practic complet

```jsx
import { useState } from "react";

export function Counter() {
  // State-ul: stochează numărul de click-uri
  const [count, setCount] = useState(0);

  // Funcție care crește numărul
  function increment() {
    setCount(count + 1);
  }

  // Funcție care scade numărul
  function decrement() {
    setCount(count - 1);
  }

  // Funcție care resetează la 0
  function reset() {
    setCount(0);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>
      
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

**Ce se întâmplă aici:**

1. **State inițial:** `count = 0`
2. **User dă click pe "+1":**
   - React apelează `increment()`
   - `increment` apelează `setCount(0 + 1)` → `setCount(1)`
   - React redesenează → `count = 1`
3. **User dă click pe "+1" din nou:**
   - React apelează `increment()`
   - `increment` apelează `setCount(1 + 1)` → `setCount(2)`
   - React redesenează → `count = 2`
4. **User dă click pe "Reset":**
   - React apelează `reset()`
   - `reset` apelează `setCount(0)`
   - React redesenează → `count = 0`

---

## 🎯 Recapitulare

### 1. Stilizare

**Folosește `className` pentru clase și `style` (obiect) pentru CSS dinamic.**

```jsx
<div className="container" style={{ backgroundColor: "red" }}>
  Conținut
</div>
```

**De reținut:**
- `class` → `className`
- `for` → `htmlFor`
- `style` = obiect JavaScript
- Proprietăți CSS în camelCase: `background-color` → `backgroundColor`

### 2. Evenimente

**Atribute directe pe elemente: `onClick`, `onChange`, `onSubmit`**

```jsx
<button onClick={handleClick}>Click</button>
<input onChange={handleChange} />
```

**De reținut:**
- Adio `addEventListener`!
- Evenimente direct pe JSX: `onClick={funcție}`
- Trimite REFERINȚA funcției (fără paranteze)
- React apelează funcția automat
- `event.target.value` pentru a citi input-ul

### 3. State

**`useState` = memoria componentei. Schimbă state-ul → React redesenează automat**

```jsx
import { useState } from "react";

const [value, setValue] = useState(0);
setValue(value + 1);  // React redesenează!
```

**De reținut:**
- `useState` e un hook (începe cu `use`)
- Returnează array: `[valoare, setterFunction]`
- Folosește destructuring pentru a extrage
- Nu modifica state-ul direct!
- Fiecare componentă are propriul state

### 📊 Tabel comparativ

| Concept | HTML/JS Vanilla | React |
|---------|-----------------|-------|
| **CSS Class** | `class="box"` | `className="box"` |
| **Label For** | `for="input1"` | `htmlFor="input1"` |
| **Inline Style** | `style="color: red"` | `style={{ color: "red" }}` |
| **Click Event** | `addEventListener("click")` | `onClick={handleClick}` |
| **Input Change** | `addEventListener("change")` | `onChange={handleChange}` |
| **State Management** | `let value = 0` (static) | `useState(0)` (reactive) |

### 💡 Glumă de final

**De ce programatorii React nu merg la petreceri?**

Pentru că nu le place să-și schimbe state-ul prea des! 😄

---

## 🎉 Felicitări!

Acum știi:
- ✅ Cum să stilizezi componente cu `className` și `style`
- ✅ Cum să gestionezi evenimente în React
- ✅ Ce este `useState` și cum transformă componente statice în interactive
- ✅ Cine apelează ce și când (spoiler: React face magia!)

**Următorul pas:** Exersează creând componente interactive cu state și evenimente! 🚀

---
