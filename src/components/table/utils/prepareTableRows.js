
export const prepareTableRows = (data, key) => {
    const row = data.find((date) => date.date === key);

    return row ? row.minutes : '';
};