const { select } = require('@inquirer/prompts')

const start = async() => {
    
    while(true){
      const opcao = await select({
        message: "Menu >",
        choices: [
            {
                name: "Cadastrar meta",
                value: "cadastrar"
            },
            {
                 name: "Listar meta",
                 value: "listar"
            },
            {
                name: "Sair",
                value: "sair"
            }
        ]
      })


       switch(opcao) {
        case "cadastrar":
            console.log("vamos cadastrar")
            break
            case "listar":
                console.log("Vamos listar")
                break
                case "sair":
                    console.log("Até logo!")
                    return
       }
        
    }
}
start()

//23:37 minutos em que eu parei da aula 2#