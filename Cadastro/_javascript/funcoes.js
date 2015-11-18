$(function() {
    // valida o formulário
    $('#formulario').validate({
        // define regras para os campos
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            sobrenome: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            remail: {
                required: true,
                email: true,
                equalTo: "#email"
            },
            sexo: {
                required: true
            },
            
            telefone: {
                required: true,
                minlength: 8
            },
            estado: {
                required: true                
            },

             cidade: {
                required: true                
            },
            cep: {
                required: true                
            },
             data: {
                required: true                
            }
        },
        // define messages para cada campo
        messages: {
            nome: "Preencha o seu nome",
            sobrenomenome: "Preencha o seu nome",
            email: "Preencha seu e-mail de contato",
            sexo: "Informe seu sexo"
        }
    });
});