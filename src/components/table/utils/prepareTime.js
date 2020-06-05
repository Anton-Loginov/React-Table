
export const prepareTime = min => {
    if (!Number(min)) return '';

    const hours = Math.trunc(min / 60);
    const minutes = min % 60;

    return `${hours}h ${minutes}m`;
};