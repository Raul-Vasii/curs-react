export function HtmlFor() {
  // 1. Cod JS
  // 2. In return punem html-ul returnat

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
