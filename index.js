require('dotenv/config')
const mongoose = require('mongoose')

mongoose
    .connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
    .then( () => console.log('connection established'))
    .catch( err => console.log('connection failed:', err))

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    color: String
})

const Car = mongoose.model('Car', carSchema)

function addCar(){
    const newCar = new Car({
        brand: 'Chevrolet',
        model: 'Camero',
        year: 2002,
        color: 'Blue'
    })
    newCar.save()
        .then(() => console.log('car created'))
        .catch(err => console.log(err))
}

addCar()