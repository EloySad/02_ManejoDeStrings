// ceclaración de strings

// let comillaSimple = 'Hola mundo'
// let comillasDobles = "Hola mundo"
// const mensaje1 = String("Hola mundo")
// const fullName = "Johan Eloy Sanchez Hernandez"
// const caractereNombre = fullName.length

// console.info(comillaSimple)
// console.info(comillasDobles)
// console.info(`La cantidad de caracteres en tu contenido es de ${caractereNombre}`)

// //Extraccion de caracteres
// let extraccionDeLetraS = fullName[11]
// let extraccionDeLetraSV2 = fullName.charAt(11)
// console.info(extraccionDeLetraS)
// console.info(extraccionDeLetraSV2)

// console.info(fullName[0])
// console.info(fullName[1])
// console.info(fullName[2])
// console.info(fullName[3])
// console.info(fullName[4])

// console.info(fullName.charAt[0])
// console.info(fullName.charAt[1])
// console.info(fullName.charAt[2])
// console.info(fullName.charAt[3])
// console.info(fullName.charAt[4])


// let nombre = "Johan"
// let apellido = "Sanchez"
// let correo = "example@gmail.com"

// const header = `
//     <header>
//         <h1>Hola Mundo</h1>
//         <p>Hola mundo, mi nombre es ${nombre} ${apellido} y mi correo es ${correo}</p>
//     </header>
// `
// document.write(header)

// let userName = prompt("Enter your name")
// let lastName = prompt("Enter your last name")
// const age = prompt("enter your age")
// const email = prompt("Enter your e-mail")
// let phoneNumber = prompt("Enter your phone number")
// let address = prompt("Enter your residence address")

// const header = `
//     <header>
//        <h1>Hola Mundo</h1>
//        <p>Hola mundo, mi nombre es ${userName} ${lastName}</p>
//        <p>Tengo ${age} años, mi correo electronico es ${email}, mi telefono de contaco es ${phoneNumber} y mi dirección de residencia es ${address}</p>
//     </header>
// `
// document.write(header)

// const mensaje = "HOLA MUNDO"
// const mensaje2 = "hoy es un nuevo dia"

// document.write(mensaje)
// document.write(mensaje2)

// console.info(mensaje2.toUpperCase())
// console.info(mensaje.toLowerCase())

// console.info(mensaje.concat(mensaje2))
// console.info(mensaje+mensaje2)


// chaqueo de info
// const mensaje = "hola MUNDO"

// console.log(mensaje.startsWith("h")) //true
// console.log(mensaje.includes("ca")) //false
// console.log(mensaje.endsWith("Do")) //false

// limpieza de string
// const mensaje = "  hola mundo  "
// console.info(mensaje)
// console.info(mensaje.trim())

// reemplazo de caracteres

// const mensaje = "soy un coder de riwi y en riwi soy feliz"
// document.write(mensaje)
// console.info(mensaje.replace("coder","programador"))
// console.info(mensaje.replaceAll("riwi","centro de entrenamiento"))
// console.info(mensaje.replace(/[aeou]/g, "i"))
// console.info(mensaje.repeat(2))

// relleno de strings
// const mensaje = "1234"
// document.write(mensaje)
// console.info(mensaje.padStart(8, "*"))
// console.info(mensaje.padEnd(20, "*"))

// fragmentar un string

// const mensaje = "Ser un coder de riwi cambia tu vida"
// document.write(mensaje)
// console.info(mensaje.substring(0,12))
// console.info(mensaje.substring(12))
// console.info(mensaje.slice(12))
// console.info(mensaje.slice(0,12))
// console.table(mensaje.split(""))