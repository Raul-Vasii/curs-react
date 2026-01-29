export function Input() {
    function handleChange(event) {
        console.log('tastat', event.target.value);
    }
    return <input type="text" onChange={handleChange} />
}