//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const number = prompt('Digite um número:')
if(number%2 == 0){
   alert("É um número par") 
}else{
    alert("Não é um número par")
}