const {register, read} = require('./operaciones');

const [orden, name, email, age, address] = process.argv.slice(2)

if (orden=== 'register'){
    register (name, email, age, address)
}

if(orden ==='read'){
    read()
}