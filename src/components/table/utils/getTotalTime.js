export const getTotalTime = rows => {
    return rows.reduce((acc, time) => {
        return time ? (acc + time) : acc
    }, 0);
}