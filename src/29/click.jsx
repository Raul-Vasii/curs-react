export function Click() {

    function handleClick() {
        console.log('Userul a dat click');
    }

    return (
     <button onClick={handleClick}>Apasa</button>
    )
}