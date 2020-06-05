
export const sortedTableRows = data => {
    return data.sort((a, b) => {
        let aTime = a[a.length - 1];
        let bTime = b[b.length - 1];

        if(aTime > bTime) {
            return -1
        } else if (aTime < bTime) {
            return 1
        }
        return 0
    })
};
