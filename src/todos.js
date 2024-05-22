export function createCard(title) {
    
    let cardtitle = title;
    let description;
    let priority;
    let notes;

    const getcardtitle = () => cardtitle;
    const setcardtitle = function(newtitle) {
        cardtitle = newtitle;
    }
    const getdescription = () => description;
    const setdescription = function(newdesc) {
        description = newdesc;
    }
    
    return {getcardtitle, setcardtitle, getdescription, setdescription};

}