let array = [101, 5, 8, 56, 2, 200, 9, 1, 21, 15, 102, 55]


function mayorArray(array){
    
    let numeroMayor = 0;

    if(array.length >= 1){
        for (let index = 0; index < array.length; index++ ) {
        
            if(array[index]> numeroMayor){
                numeroMayor = array[index]
            }
            
        }
    
        let i = 0;
        while (i < array.length) {
            console.log("impresion de numeros con while: " + array[i])
            i++
        }
    
        let h = 0;
        let impares = 0;
    
        do {
    
            if( !(array[h]% 2 === 0)){
                impares++  
            }
            h++;
    
        } while (h < array.length);
    
        console.log("el array tiene un total de: " + impares + " numeros impares" )
            
        return numeroMayor
    } else{

        return null;
    } 
}




console.log(mayorArray(array));