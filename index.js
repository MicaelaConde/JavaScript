alert('Bienvenido a Pet Shop')
let compra=0
let i = 1
while(i<=4){
    let menu= parseInt(prompt('      Menu\n1- Alimentos\n2- Juguetes\n3- Contacto\n4- Salir'))
    switch (menu){
        case 1: 
        let alimentos =parseInt(prompt('1- Bolsa 1kg $120\n2- Bolsa 5kg $500\n3- Bolsa 10kg $840\n4- Salir')) 
        if (alimentos===1){
            compra=compra+120

        }if(alimentos===2){
            compra=compra+500
        }if(alimentos===3){
            compra=compra+840
        }
        else{
            break;
        }
             

    }
    i=menu
}

alert(compra)

// let numero =parseInt(prompt('Ingrese un numero del 1 al 10'))
// let resultado
// i=1
// while(numero<=10 && numero>=1 && i<=10){
//  resultado = numero * i
//  alert(numero+ ' * '+ i + ' = '+ resultado)
//  i++
// }
