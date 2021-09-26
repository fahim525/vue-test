export const filterByTag = (data, query) => {
   
    return data.filter(item => item.location.includes(query.label));

}