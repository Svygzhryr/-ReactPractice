export const getPageCount = (totalCount, limit) => {
    let totalPages = Math.ceil(totalCount / limit);
    return totalPages;
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result;
}