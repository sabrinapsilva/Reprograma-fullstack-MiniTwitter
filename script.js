//$(document).ready(function() {

      $("#btn-submit").click(function(event){
      event.preventDefault();
      $("#textArea").val();
      acrescentarTweet();
      document.querySelector("#resetar").reset();

      //$("#resetar").reset();
    });

  
//O método prepend () insere o conteúdo especificado no início dos elementos selecionados.
    function acrescentarTweet() {
      $("#tweets").prepend(`
      <div class="p-3 mb-2 bg-light text-dark">
      <p  class="text-primary">${$("#textArea").val()}</p>
      <p class="text-light bg-dark">${data}</p> 
      </div>
      `
        )
    }
    
    function pegaNumeroCaracteres() {
      let charSobrando = 280 - $("#textArea").val().length;
      return $("#caractere").text(`você ainda tem ${charSobrando} caracteres`);
  }
  

// keyup quando solta do dedo da tecla 
//O evento de chave ocorre quando uma tecla do teclado é liberada.
//O método keyup () dispara o evento keyup ou anexa uma função para ser executada quando ocorre um evento keyup.     
    $("#textArea").keyup(function(){
        pegaNumeroCaracteres();
        changeColorChars();
        disableTweetButton();
    })
  
    /*function dataInserir(date) {
      const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro","novembro", "dez"];
      let dia = date.getDate();
      let mes = date.getMonth();
      let ano = date.getFullYear();
      return `${dia} de ${meses[mes]} de ${ano}`;
    }

    function acrescentarData(){
      return dataInserir(new Date());
    } 
*/
    let data = new Date;
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro","novembro", "dez"];
     `${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`;

    function changeColorChars(){
      if($("#textArea").val().length >= 240) {
        $("#textArea").removeClass("text-warning");
        $("#textArea").addClass("text-danger");
      } else if($("#textArea").val().length >= 200 && $("#textArea").val().length < 240) {
        $("#textArea").addClass("text-warning");
        $("#textArea").removeClass("text-danger");
      } else {
        $("#textArea").removeClass("text-danger text-warning");
      }
    }
  
    function disableTweetButton(){
      if($("#textArea").val().length > 280){
        $("#btn-submit").addClass("disabled");
        $("#btn-submit").attr("disabled", true);
        console.log("disabled");
      } else {
        $("#btn-submit").removeClass("disabled");
        $("#btn-submit").attr("disabled", false);
      }
    }
  
    