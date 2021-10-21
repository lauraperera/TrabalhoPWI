# TrabalhoPWI
 
## Descrição 
- Para o desenvolvimento do presente trabalho utilizou-se o **Express** como framework Node.js para construção do servidor e rotas da aplicação e o **EJS** como template engine para exibição dos dados na tela. Através do framework Express utilizou-se os métodos *GET* e *POST*: através do método GET os parâmetros dos formulários de **cadastro** e **login** são passados via URL e através do método POST, são passados os parâmetros no *body* da requisição.

- Para exibição dos dados na aplicação utilizou-se o **EJS** como Template Engine, deste modo, os dados dos formulários que foram criados com *html* e *css* são "traduzidos" e enviados para o navegador. Os arquivos que utilizam EJS estão na pasta *views* e são chmados no arquivo principal.

- Para capturar as informações das views utilizou-se o **body-parser**, que realizou a conversão do *body* da requisição, capturando as informações inseridas no formulário **login**. Como o body-parser foi adicionado ao Express, não foi preciso realizar o download separado.

