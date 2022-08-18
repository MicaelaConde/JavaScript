alert('Tabla de multiplicacion')
let numero =parseInt(prompt('Ingrese un numero del 1 al 10'))
let resultado
i=1
while(numero<=10 && numero>=1 && i<=10){
 resultado = numero * i
 alert(numero+ ' * '+ i + ' = '+ resultado)
 i++
}
