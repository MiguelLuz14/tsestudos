// string
let nome: string = 'João'
console.log(nome)
// nome =28

//numbers
let idade: number = 27
console.log (idade)

//boolean
let possuiHobbies: boolean = false
console.log(possuiHobbies)

//tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)

//array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100,200,300]
console.log(hobbies)

//Tuplas
let endereco: [string,number,string] = ["Av Principal", 99,'matematica']
console.log(endereco)

endereco = ['Rua Boa', 1260,'precioso']
console.log(endereco)

//enums
enum Cor {
    Cinza,
    Verde =100,
    Azul=10,
    Laranja
}
let minhaCor: Cor = Cor.Verde
console.log (minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja)

//any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019}
console.log(carro)

//funções
function retornaMeuNome(): string{
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('oi')
    // return minhaIdade
}
digaOi()
function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
console.log(multiplicar(2,9))

//tipos função
let calculo: (numeroA: number, numeroB: number,) => number
calculo = multiplicar
console.log(calculo(5, 6))

//objetos
let usuario: { nome: string, idade:number} = {
    nome: "João",
    idade: 27
}
console.log(usuario)
