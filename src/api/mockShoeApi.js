import delay from './delay';

const shoes = [
  {
    id: 1,
    date: '3/26/1993',
    seller: "Ray",
    shoe: "bred 1s",
    size: 9,
    condition: 10
  },  
  {
    id: 2,
    date: '4/26/1993',
    seller: "SwagRay",
    shoe: "bred 2s",
    size: 10,
    condition: 10
  }
  ];

  const trades = [];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (shoe) => {
  return replaceAll(shoe.shoe, ' ', '-');
};

class ShoeApi {
  static getAllShoes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], shoes));
      }, delay);
    });
  }

  static saveShoe(shoe) {
    shoe = Object.assign({}, shoe); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minLength = 1;
        if (shoe.shoe.length < minLength) {
          reject(`Title must be at least ${minLength} characters.`);
        }

        if (shoe.id) {
          const existingShoeIndex = shoes.findIndex(a => a.id == shoe.id);
          shoes.splice(existingShoeIndex, 1, shoe);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          shoe.id = generateId(shoe);
          shoes.push(shoe);
        }

        resolve(shoe);
      }, delay);
    });
  }

  static deleteShoe(shoeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfShoeToDelete = shoes.findIndex(shoe => {
          shoe.shoeId == shoeId;
        });
        shoes.splice(indexOfShoeToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ShoeApi;