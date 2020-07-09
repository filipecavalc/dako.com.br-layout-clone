# dako.com.br layout clone
Projeto com foco em copiar a pagina inicial do site dako.com.br

## Como Rodar o Projeto
Para rodar o projeto localmente basta abrir o arquivo index.html que se encontra na pasta public.

## Tecnologias utilizadas foram:
* HTML
* CSS
* LESS
* Javascript Puro

Para os carouseis foi utilizado a bliblioteca feita em javascript puro (Vanilla Javascript) [Glide.js](https://glidejs.com/)

Live preview do projeto nesse link: https://dako-homepage-clone.web.app/

Projeto está rodando em um servidor no firebase.

## Arquitetura dos arquivos
Projeto possui um css unico que foi compilado através de um arquivo usado como router dos arquivos less. Arquivo styles.less é o router que é compilado no arquivo styles.css dentro da pasta css.

Arquivos less foram organizados da seguinte forma:
* Arquivos na raiz da pasta são os com responsabilidade abrangente;
* A pasta less possui varios componentes com os seus respectivos "css";
* Foi subdividido os arquivos em outros dentro das pastas componentes de acordo com a responsabilidade e contexto do uso de cada um;

Ainda é possivel trabalhar um pouco mais em melhorias da organização do código, alguns tamanhos de fonte que se repetiram com frequencia poderiam ser transformadas em variaveis por exemplo.