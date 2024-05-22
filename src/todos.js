export function createCard(title) {
    
    let description;
    let priority;
    let notes;

    const getdescription = () => description;
    const setdescription = function(newdesc) {
        description = newdesc;
    }
    
    return {title, getdescription, setdescription};
}