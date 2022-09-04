alert("Bienvenido a Pet Shop");
let compra = 0;
let i = 1;
let productos = []
let alimentos = []
let juguetes = []
let carrito =[]

const alimentoChico = {
  kilos:1,
  precio:120
}
alimentos.push(alimentoChico)

const alimentoMediano = {
  kilos:5,
  precio:500
}
alimentos.push(alimentoMediano)
const alimentoGrande ={
  kilos: 10,
  precio: 840
}
alimentos.push(alimentoGrande)
 productos.push(alimentos)


const juguete1 ={
  item:"Pelota",
  precio:150
}
 juguetes.push(juguete1)

 const juguete2 ={
  item: "Cuerda",
  precio:80
 }
 juguetes.push(juguete2)

 const juguete3 ={
  item:"Hueso",
  precio:130
 }

productos.push(juguetes)
while (i <= 4) {
  let menu = parseInt(
    prompt("      Menu\n1- Alimentos\n2- Juguetes\n3- Contacto\n4- Salir")
  );
  switch (menu) {
    case 1:
      let eligioAlimentos = parseInt(
        prompt(
          "1- Bolsa 1kg $120\n2- Bolsa 5kg $500\n3- Bolsa 10kg $840\n4- Salir"
        )
      );
      if (eligioAlimentos === 1) {
        carrito.push(productos[0][0])
        compra= compra + carrito[0].precio
        break;
      } else if (eligioAlimentos === 2) {
        carrito.push(productos[0][1])
        compra = compra + carrito[1].precio
        break;
      } else if (eligioAlimentos === 3) {
        carrito.push(productos[0][2])
        compra = compra + carrito[2].precio;
        break;
      } else if (eligioAlimentos === 4) {
        i = 5;
        break;
      } else {
        alert("Ingrese una opcion valida");
        break;
      }

    case 2:
      let eligioJuguetes = parseInt(
        prompt("1- Pelota $150\n2- Cuerda $80\n3- Hueso $130\n4- Salir")
      );
      if (eligioJuguetes === 1) {
        carrito.push(productos[1][0])
        compra = compra + carrito[1].precio;
        break;
      } else if (eligioJuguetes === 2) {
        carrito.push(productos[1][1])
        compra = compra + carrito[1].precio;
        break;
      } else if (eligioJuguetes === 3) {
        carrito.push(productos[1][2])
        compra = compra + carrito[2].precio;
        break;
      } else if (eligioJuguetes === 4) {
        i = 5;
        break;
      } else {
        alert("Ingrese una opcion valida");
        break;
      }

    case 3:
      alert(
        "Puedes contactarnos mediante\nWhatsapp: 095478452\nMail: petshop@gmail.com"
      );
      break;
    case 4:
      i = 5;
      break;
  }
}

alert("Total de su compra es  " + "$" + compra);
