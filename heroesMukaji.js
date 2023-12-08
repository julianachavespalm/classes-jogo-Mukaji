/*
    Aqui optei por armazenar os dados dos heróis diretamente neste arquivo JavaScript,
    usando um array de objetos JSON.
    Isso permite uma estrutura mais simples e centralizada para acesso aos dados dos heróis
    Principalmente por ser um arquivo curto.    
*/ 
const herois = [
    {
        "nome": "Kwame",
        "idade": 28,
        "tipo": "mago",
        "ataque": "usou magia"
    },
    {
        "nome": "Nuru",
        "idade": 32,
        "tipo": "guerreiro",
        "ataque": "usou espada"
    },
    {
        "nome": "Asha",
        "idade": 25,
        "tipo": "monge",
        "ataque": "usou artes marciais"
    },
    {
        "nome": "Malaika",
        "idade": 30,
        "tipo": "ninja",
        "ataque": "usou shuriken"
    },
    {
        "nome": "Safiya",
        "idade": 35,
        "tipo": "mago",
        "ataque": "usou magia"
    }
];

class Heroi {
    // Constructor responsável por inicializar os atributos de cada instância da classe Heroi
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome; 
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }


    /*Quando o jogo for implementado, após a ação de cada heroi, deve ser exibido o tipo de heroi,
    seu nome, e o ataque utilizado. */
    atacar() {
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`);
    }
}


/* Método utilizado para o método "atacar()", ele faz com que para cada herói na lista,
 este trecho de código crie um objeto Heroi correspondente e chama seu método atacar(). */
herois.forEach(heroi => {
    const novoHeroi = new Heroi(heroi.nome, heroi.idade, heroi.tipo, heroi.ataque);
    novoHeroi.atacar();
});