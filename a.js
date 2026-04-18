class Aluno {
    #nome
    #matricula

    constructor(nome, matricula) {
        this.#nome = nome
        this.#matricula = matricula
    }

    verNome(){
        return this.#nome
    }
    trocarNome(nome) {
        this.#nome = nome
        console.log(this.#nome)
    }
    verMatricula(){
        return this.#matricula
    }
    trocarMatricula(matricula){
        this.#matricula = matricula
        console.log(this.#matricula)
    }
}

let aluno = new Aluno('João', 111)
console.log(aluno.verNome())
aluno.trocarNome('Maria')
console.log(aluno.verMatricula())
aluno.trocarMatricula(112)
