
# Atividade Avaliativa IV - Prática

- Curso - Desenvolvimento de Sistemas
- Unidade Curricular - Lógica de Programação
- Docente - Gustavo Roberto de Souza

## Orientações Gerais
- A avaliação deverá ser realizada individualmente.
- Não é permitido o uso do celular durante a realização da atividade.
- Cada questão vale 2 pontos.
- Conceitos de entrada e saída de dados, variáveis, operadores e estruturas condicionais.
- A entrega deverá ser feita no AVA. Deve ser enviado apenas o link do repositório do github.

## Passo-a-Passo (Clonar e Entrega)
1. Você deve fazer um fork desse repositório, na parte superior dessa página clique na botão de fork. 
2. Depois disso, você deve clonar o repositório para o seu computador, usando o seguinte comando.
   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o seguinte comando `git clone <url_do_repositório>`
3. Abra no seu VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar você precisa comittar e enviar novamente para o github suas modificações.
   1. Primeiro precisamos adicionar as alterações ao stage, usando o comando  `git add .`.
   2.  Depois disso, você vai de fato commitar, usando o comando `git commit -m "sua mensagem"`.
   3.  Por fim, você precisa fazer push para o github, com o comando `git push origin master`.
6. Por fim, você deve copiar o link do seu repositório e fazer o envio no AVA. 
   1. Você deve adicionar como comentário na entrega do AVA.

## Questões

### Questão 01
Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele conte quantas vogais esse texto ou palavra tem. 
Vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.

---

### Questão 02
Escreva um algoritmo para verificar se palavra é um palíndromo. Uma palavra palíndromo é uma palavra que é igual,
lendo ela de trás para frente. Novamente, lembrando que uma string é um vetor de caracteres.

Opcional, você pode criar uma lógica para verificar se um texto é palíndromo também. Para isso, você deve ignorar espaços. 
Segue abaixo, uma forma de remover espaços com JavaScript.

```javascript
var str = "   Exemplo de string com espaços   ";
var novaStr = str.replaceAll(" ", "")
```
Exemplos de Palíndromos
```markdown
- ovo
- ana
- reviver
- a torre da derrota
- o lobo ama o bolo
```

---

### Questão 03
Você deve desenvolver um algoritmo para conversão de temperaturas. Você deve solicitar ao usuário a unidade de medida de origem, a temperatura, e a unidade de medida para qual deseja fazer a conversão. Nesse momento você deve levar em consideração apenas 3 unidades de medida Celsius, Kelvin e Fahrenheit. No final o algoritmo deve informar a temperatura na unidade de medida escolhida.

```markdown
Celsius para Fahrenheit = F = (C * 1.8) + 32 
Fahrenheit para Celsius = C = (F - 32) * (5/9)

Celsius para Kelvin = K = C + 273.15 
Kelvin para Celsius = C = K - 273.15

Celsius para Kelvin = K = (F - 32) * (5/9) + 273.15 
Kelvin para Fahrenheit = F = (K - 273.15) * 1.8 + 32
```

---

### Questão 04
Você precisa desenvolver um algoritmo para calcular a pontuação de todos os jogadores de um time de futebol. Nesse momento será 
analisada apenas a quantidade de gols, passes certos e passes errados.

    Cada Gol: 50 Pontos
    Cada Passe Certo: 10 Pontos
    Cada Passe Errado: -5 Pontos

Você deve solicitar o nome do jogador, quantidade de gols, numero de passes certos e quantidade de passes errados. O algoritmo deve calcular a pontuação de casa jogador e informar se o jogador foi bem ou mal na partida, levando como base a seguinte tabela. No final, deve apresentar o
jogador com melhor pontuação.

    Pontuação < 50 - Péssima partida.
    Pontuação de 50 até 100 - Partida ruim.
    Pontuação de 100 até 150 - Fez o básico
    Pontuação de 150 até 200 - Foi bem na partida
    Pontuação acima de 200 - Jogou demais

---

### Questão 05
Escreva um algoritmo para verificar se uma roleta de cassino é viciada. A roleta tem 37 números (de 0 a 36), sendo que o número 0 é verde e os demais são divididos igualmente entre vermelho e preto (impares são vermelho, pares são pretos). O programa deve contar quantas vezes cada cor (verde, vermelho, preto) foi gerada e verificar se alguma cor tem uma frequência maior que 40%. Se houver, o programa deve indicar que a roleta pode estar viciada.

---


