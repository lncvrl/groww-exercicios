/* RESPOSTA AQUI 👇 */


/* Questão 01 
Faça uma código que recebe três lados de um triângulo(a,b,c) e retorne o tipo de triângulo
a) A>=B+C não existe o triângulo
b) A² = B² + C² é um triângulo retângulo
c) A² > B² + C² é formado um triângulo obtusângulo
d) A² < B² + C² formando um acutângulo

Exceções: 
O lado A sempre deverá ser o maior de todos(Criar um mecânismo para tratar isso)
Caso sejam fornecidos valores negativos, retornar erro para o usuário.

*/
function calculaMedia(A, B, C) {
    
    if (A >= B + C) {
        return ('Não existe triangulo')
    }
    if (A**2 == B**2 + C**2) {
        return ('Triangulo retangulo')
    }
    if (A**2 > B**2 + C**2) {
        return ('Triangulo obtusangulo')
    }
    if (A**2 < B**2 + C**2) {
        return ('Triangulo acutangulo')   
    }
}




/* Questão 02

Uma empresa quer aumentar o salário dos funcionários dada a seguinte tábela
-> Até R$400,00 --------------------------- 15%
-> Entre R$400,01 e R$700 ----------------- 12%
-> Emtre R$700,01 e R$1000,00 ------------- 10%
-> Entre R$1000,01 e $2000,00 ------------- 7%
-> Entre R$2000,01 e R$3500,00 ------------ 4%
-> Acima de $3500,01 ---------------------- 0%

Crie um código que recebe o salario do funcionário(apenas numérico) e retorne o salario atual, a porcentagem de correção e o valor corrigido
*/

function corrigiSalario(salario) {
        if(salario < 400.00){
            return salario + salario * 0.15
       }else if(salario >= 400.01 && salario <= 700.00){
            return salario + salario * 0.12
       }else if(salario >= 700.01 && salario <= 1000.00){
            return salario + salario * 0.10
       }else if(salario >= 1000.01 && salario <= 2000.00){
            return salario + salario * 0.07
       }else if(salario >= 2500.01 && salario <= 3500.00){
            return salario + salario * 0.04
       }else if(salario > 3500.01){
            return salario
       }

}


