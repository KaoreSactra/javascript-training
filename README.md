# JavaScript Training

Este projeto reúne meus estudos iniciais com JavaScript, realizados no início de 2024, antes de começar a aprender Next.js. Organizei e publiquei esses exemplos para não esquecer os fundamentos e também para ajudar outros desenvolvedores que estão começando.

> **Organização do código:**  
> - `//?` - Título.  
> - `//*` - Explicação.  
> - `// ==>` - Resultado esperado.

## Ferramentas Utilizadas

- **Node.js**: Para executar e testar códigos JavaScript fora do navegador.  
- **Vite**: Para testes rápidos de respostas no navegador.  
- **JavaScript**: A linguagem utilizada para os exemplos.  
- **HTML e CSS**: Para estruturar e estilizar algumas das respostas.

## Estrutura do Projeto

O projeto cobre os seguintes tópicos fundamentais:

1. **Operadores Avançados**
   - Nullish Coalescing Operator (`??`)
   - Optional Chaining (`?.`)
   - Rest e Spread Operators
2. **Manipulação de Objetos e Arrays**
   - Desestruturação
   - Métodos como `map`, `filter`, `reduce`, entre outros
3. **Template Literals**
4. **Promises e Operações Assíncronas**
   - Uso de `then` e `catch`
   - Funções assíncronas com `async`/`await`
5. **Fetch API**
   - Exemplos para consumir a API do GitHub

## Exemplos

- **Desestruturação**:
  ```javascript
  const { address, age: idade } = user1;
  console.log(idade, address);
  ```
- **Promises**:
  ```javascript
  async function searchGithubUsers(user) {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();
      console.log(data);
  }
  ```