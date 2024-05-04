O Flexbox, ou Flexible Box Layout, é uma abordagem eficiente para criar layouts flexíveis, alinhar e distribuir espaços entre itens em um container, mesmo quando suas dimensões são desconhecidas ou dinâmicas.

Como Usar Este Material
Este repositório fornece exemplos práticos e explicativos para ajudar você a compreender e utilizar o Flexbox em seus projetos.

Estrutura do Projeto
plaintext
/css
  ├── style.css
/index.html

index.html: O arquivo HTML principal.
style.css: O arquivo CSS que será vinculado ao arquivo HTML.
Principais Comandos do Flexbox
Display Flex:

.container {
  display: flex;
}

Flex Direction:

.container {
  flex-direction: row; /* ou row-reverse, column, column-reverse */
}


Justify Content:

.container {
  justify-content: space-between; /* ou flex-start, flex-end, center, space-around */
}
Align Items:

.container {
  align-items: center; /* ou flex-start, flex-end, center, baseline, stretch */
}


Flex Wrap:

.container {
  flex-wrap: nowrap; /* ou wrap, wrap-reverse */
}
Align Content:

.container {
  align-content: flex-start; /* ou flex-end, center, space-between, space-around, stretch */
}


Exemplo Prático
css
Copy code
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
Este exemplo cria um container flexível com uma linha, espaçamento uniforme entre os itens e alinhamento vertical central.


O Flexbox é uma ferramenta poderosa para layouts flexíveis e responsivos. Experimente diferentes combinações desses comandos para obter os resultados desejados. Este guia cobre os fundamentos, mas há muito mais para explorar no Flexbox. Consulte a documentação oficial do CSS Flexbox para informações detalhadas.
