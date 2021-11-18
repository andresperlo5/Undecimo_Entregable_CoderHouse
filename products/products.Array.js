const arrProd = []
const faker = require('faker')

for(let i = 0; i < 5; i++){
    arrProd.push({
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        thumbnail: faker.image.food()
    })
}

module.exports = arrProd