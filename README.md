# TrabalhoPWI
 
## Descrição do desenvolvimento do trabalho
- Para o desenvolvimento do presente trabalho utilizou-se o **Express** como framework Node.js para construção do servidor e rotas da aplicação e o **EJS** como template engine para exibição dos dados na tela. Através do framework Express utilizou-se os métodos *GET* e *POST*: através do método GET os parâmetros dos formulários de **cadastro** e **login** são passados via URL e através do método POST, são passados os parâmetros no *body* da requisição.

- Para exibição dos dados na aplicação utilizou-se o **EJS** como Template Engine, deste modo, os dados dos formulários que foram criados com *html* e *css* são "traduzidos" e enviados para o navegador. Os arquivos que utilizam EJS estão na pasta *views* e são chmados no arquivo principal.

- Para capturar as informações das views utilizou-se o **body-parser**, que realizou a conversão do *body* da requisição, capturando as informações inseridas no formulário **login**. Como o body-parser foi adicionado ao Express, não foi preciso realizar o download separado.

## Descrição do funcionamento do trabalho
- Ao rodar o arquivo principal, o servidor é aberto e o terminal exibe uma mensagem avisando que o servidor está rodando na porta indicada.
- A rota principal exibida através do método **GET** é um formulário básico de **cadastro** com inputs para inserir *Nome de usuário*, *Email*, *Senha*, *Nome*, *Telefone*, *Data de Nascimento* e um checkpoint de *Termos*. Ao terminar de preencher os dados nesta primeira página e clicar no botão **Cadastrar** o usuário será redirecionado para uma página de login.
- A segunda rota, também exibida através do método **GET** é um formulário de **login** que só ficará disponível depois de ter preenchido todo o cadastro anterior. O formulário conta com inputs para inserir *Nome de usuário*, *Email*, *Senha* e um checkpoint para *Lembrar meus dados*. Ao terminar de preencher os dados na segunda página e clicar no botão **Login**, as informações inseridas serão lidas através do método **POST** e uma mensagem exibindo o *Nome de usuário* e *Email* será mostrada para confirmar o armazenamento dos dados.

## Instalações
- NPM
`$ npm init`
- Express
`$ npm install express --save`
- EJS
`$ npm install ejs --save`

