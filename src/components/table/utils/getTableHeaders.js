
export const getTableHeaders = (data) => {
    let uniqDates = {}

    data.forEach(item => {
        item.data.forEach(item2 => {
            uniqDates[item2.date] = item2.date
        })
    });

    return Object.keys(uniqDates).sort((a, b) => new Date(a) - new Date(b));;
};