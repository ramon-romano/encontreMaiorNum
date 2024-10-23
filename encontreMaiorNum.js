function encontreMaiorNumero(array){
    let maiorArray = array[0]
  
    for(let i = 0; i < array.length;i++){
        if(array[i] > maiorArray){
          maiorArray = array[i]
      }
    }
  
    return maiorArray;
  }
  
  console.log(encontreMaiorNumero([10 ,44, 66, 34, 83, 99, 23]))