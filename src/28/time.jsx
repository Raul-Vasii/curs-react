export function Time() {
    const date = new Date();

    const day = today.toLocalDataString("ro-RO", { weekday: "long"});

    return <span>{day}</span>;
}