function addToDb(id){
    let shoppingCart = {};
    let storedCart = localStorage.getItem('shopping-cart');

    if(storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } 

    if(shoppingCart[id]) {
        shoppingCart[id] += 1;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

function removeFromDb(id) {
    let shoppingCart = {};
    let storedCart = localStorage.getItem('shopping-cart');

    if(storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } 

    if(shoppingCart[id]) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    } 

}

function getTotal(products) {
    let total = products.reduce( (prev, curr) => {
        return prev + curr.price
    },0);
    return total;
}

export {addToDb, removeFromDb, getTotal};