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
            break;


        }else if(alimentos===2){
            compra=compra+500
            break;
        }else if(alimentos===3){
            compra=compra+840
            break;
        }
        else if(alimentos===4){
                i=5
                break;
        }
        else{
            alert('Ingrese una opcion valida')
            break;
        }
           
        case 2:
            let Juguetes =parseInt(prompt('1- Pelota $150\n2- Cuerda $80\n3- Hueso $130\n4- Salir')) 
            if (Juguetes===1){
                compra=compra+150
                break;
    
            } else if(Juguetes===2){
                compra=compra+80
                break;
            } else if(Juguetes===3){
                compra=compra+130
                break;
            }
             else if(Juguetes===4){
                i=5
                break;
        }
            else{
                alert('Ingrese una opcion valida')
                break;
            }

            case 3:
                alert('Puedes contactarnos mediante\nWhatsapp: 095478452\nMail: petshop@gmail.com')
                break;
            case 4:
                i=5
                break;
    }

    
}



alert("Total de su compra es  "+ "$"+compra)
