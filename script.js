
function calcular(){
console.log("Iniciando...")
    let lado1 = document.getElementById("lado1");
    let lado2 = document.getElementById("lado2");
    let lado3 = document.getElementById("lado3");

    let resultado = document.getElementById("resultado");

    let l1 = lado1.value;
    let l2 = lado2.value;
    let l3 = lado3.value;

    let triangulo = ValidaTriagulo(l1,l2,l3);
    console.log(triangulo)
    if(triangulo == true){
        TipoTriangulo(l1,l2,l3);
        resultado.innerHTML = `<p> É um ${tipo}</p>`;
    }else{
        resultado.innerHTML = "<p>Essas dimenções não são de um triangulo!</p>";

        resultado.innerHTML +=  '<img src="assents/erro.png" alt="Erro">';
       
    }

}

function ValidaTriagulo(ladoA, ladoB, ladoC) {

    if(ladoA < (ladoB + ladoC) & ladoB < (ladoA + ladoC) & ladoC < (ladoA + ladoB)){
        return true;
    }else{
        return false;
    }
  
}
   
  function TipoTriangulo(ladoA,ladoB,ladoC){

    if (ladoA == ladoB && ladoB == ladoC) {
        tipo = "Triângulo Equilátero";
      } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        tipo = "Triângulo Isósceles";
      } else {
        tipo = "Triângulo Escaleno";
      }
  }
 