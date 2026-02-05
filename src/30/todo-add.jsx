export function TodoAdd({ inputValue, onInputChange, onAdd }) {
  return (
    <div className="input-grup">
      <input type="text" value={inputValue} onChange={onInputChange} />
      <button className="add-btn" onClick={onAdd}>
        Adauga
      </button>
    </div>
  );
}
