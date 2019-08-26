/**/

$(document).on("click", "#scanear", function(){
    scanBarcode();
});

function scanBarcode() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {                 
            $("#codigo").val(result.text);
        },
        function (error) {
          alert("codigo invalido: " + error);
        }
    );    
}

$(document).on("click", "#create", function(){
    var parametros = {
        "codigo": $("#codigo").val(),
        "nome": $("#nome").val(),
        "idade": $("#idade").val(),
        "sexo": $("#sexo").val(),
        "endereco": $("#endereco").val(),
        "cpf": $("#cpf").val(),
    }

    $.ajax({
        type: "post",
        url:"https://appmobile3ds2.000webhostapp.com/atvCadastroPessoas/cadastro.php",
        data:parametros,
        success: function(data){
            navigator.notification.alert(data);
            $("#codigo").val(""),
            $("#nome").val(""),
            $("#idade").val(""),
            $("#sexo").val(""),
            $("#endereco").val(""),
            $("#cpf").val("")
        },
        error: function(data){
            navigator.notification.alert(data);
        }
    });
});