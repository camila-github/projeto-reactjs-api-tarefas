## Projeto: Criação de lista de tarefas com ReactJs + API 

- Criado site para acessar uma API e listar as tarefas assim que a pagina é carregada. E tambem o site tem a opção de cadastrar e excluir tarefas. O intuito do projeto foi para realizar a segregação de componentes como buttons, Task, Header para serem reutilizados entre os componentes. Foi usado as ferramentas como ReactJS + CSS3.

## Ferramentas Utilizadas

- ReactJS (react-dom, react-icons, react-router-dom)
- NodeJs - NPM
- Axios - Cliente HTTP baseado em Promises para fazer requisições na API
- Json-Server - Utilizado criar um webservice REST
- CSS3

## Instalar dependências.

- Acesse o github e faça o download do projeto. 
- Na pasta raiz execute `npm install` ou `yarn install` para instalar as dependências.
- Execute inicialmente o servidor do json-server para ativar a api (db.json) que esta local no projeto. Utilize o comando dentro do diretorio onde esta o arquivo db.json: `json-server --watch db.json`
- Depois rode a aplicação (Front-End), acesse a pasta raiz e execute `npm start` para iniciar servidor do Reactjs. Detalhe: por padrão o react abre o site na porta 3000 do localhost, caso o json-server estiver utilizando essa mesma porta, o react irá questionar se deseja abrir o site em outra porta, confirme com Y (Sim), para que o react possa abrir o site em uma porta diferente, no meu caso foi na porta 3001.

## Links de Referencias:

- React Icons
[https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)

- Documentação ReactJS
[https://pt-br.reactjs.org/](https://pt-br.reactjs.org/)

- Referencia para o projeto:
[https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3Ll3NE4NeR_HahjRVJnaVAkK&index=2](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3Ll3NE4NeR_HahjRVJnaVAkK&index=2)

- Axios
[https://axios-http.com/docs/intro](https://axios-http.com/docs/intro)

- Json-Server
[https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

## Vídeo de demonstração do aplicativo

![Video](https://github.com/camila-github/projeto-reactjs-api-tarefas/blob/main/docs/apresentacao.gif)
