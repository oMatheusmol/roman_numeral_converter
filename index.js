function roman_numeral_converter(letra){
  let resultado = 0;
  let conversao={
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  
  for(let i=0;i<letra.length;i++){
      
      let atual = letra[i];
      let proximo = letra[i+1];           
      if(proximo && conversao[proximo]> conversao[atual]){
          resultado -= conversao[atual];
      }else{
          resultado += conversao[atual];
      }

  }
  console.log(resultado);

}

roman_numeral_converter('XCIV');
