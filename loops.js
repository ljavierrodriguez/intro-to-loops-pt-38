/* Loops */
/* 

for(contador; condicion; incremento){
    sentencias
}

for(indice in coleccion){ // devuelve el indice del valor encontrado
    sentencias
}

for(valor of coleccion){
    sentencias
}

while(condicion){
    sentencias
}

do {
    sentencias
} while (condicion)


*/
//      1           2          4
for (let num = 1; num <= 10; num++) {
    //      3
    console.log(num);
}

let nombres = ["Hugo", "Paco", "Luis", "Donald", "Mickey"];
let apellidos = ["Perez", "Martinez", "Ortega", "Ruiz", "Fernandez"];

for (let indice = 0; indice < nombres.length; indice++) {
    console.log(nombres[indice]);
}

for (let indice in nombres) {
    console.log(indice);
    console.log(nombres[indice]);
}

for (let nombre of nombres) {
    console.log(nombre);
}

// ejecuta aqui 1
for (let nombre of nombres) {
    console.log("nombre:", nombre);
    // ejecuta aqui 2
    for (let apellido of apellidos) {
        console.log(`${nombre} ${apellido}`);
    }
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i}+${j}=${(i + j)}`)
    }
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++; // i++; i+=1; i = i + 1; 
}

let indice = 0;
while (indice < nombres.length) {
    console.log(nombres[indice]);
    indice++;
}

let n = 0;
while (n < nombres.length) {
    let a = 0;
    while (a < apellidos.length) {
        console.log(`${nombres[n]} ${apellidos[a]}`)
        a++;
    }
    n++;
}

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10);

let opt = "";
do {

    console.log("Opcion 1: Ver productos");
    console.log("Opcion 2: Añadir productos");
    console.log("Opcion 3: Vender productos");
    console.log("Opcion 4: Comprar productos");
    console.log("Opcion 5: salir");
    let opcion = prompt("Ingrese Opcion");
    switch (opcion) {
        case "1":
            console.log("Viendo productos");
            break;
        case "2":
            console.log("Añadiendo productos");
            break;
        case "3":
            console.log("Vendiendo productos");
            break;
        case "4":
            console.log("Comprando productos");
            break;
        case "5":
            opt = "salir";
            break;
        default:
            console.log("Opcion Invalida");
            break;
    }
} while (opt !== "salir");