function generarfizzbuzz(n) {
    let mensaje = "";
    if(n % 3 == 0){
        mensaje = "fizz";
    }else{
        mensaje = n + "";
    }
    return mensaje;
   //return n + "" ;
  }
  export default generarfizzbuzz;