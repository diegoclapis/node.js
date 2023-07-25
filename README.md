# Projeto para leitura e extração de links de uma aquivo .md
O projeto consiste em um script Node.js que permite ao usuário passar um arquivo ou uma pasta como parâmetro. O script lerá os arquivos com a extensão .md dentro da pasta especificada ou o arquivo individual fornecido pelo usuário. Em seguida, usa expressões regulares (regex) para extrair os links contidos nos arquivos Markdown.

Passos do Projeto:

1. Receber e validar o parâmetro fornecido pelo usuário, que pode ser um arquivo ou uma pasta.
2. Identificar se o parâmetro é um arquivo individual ou uma pasta e realizar a ação correspondente:
    - Se for um arquivo individual, ler o conteúdo do arquivo.
    - Se for uma pasta, listar todos os arquivos com extensão .md dentro dela.
3. Para cada arquivo identificado, aplicar expressões regulares para extrair os links contidos no seu conteúdo.
4. Armazenar os links extraídos em um objeto, associando-os com o nome do arquivo onde foram encontrados ou com algum identificador único.
5. Caso seja solicitado pelo usuário, realizar a validação das URLs extraídas para verificar se são válidas ou não. Isso pode ser feito através de solicitações HTTP (por exemplo, usando a biblioteca flech).
6. Retornar o objeto contendo os links extraídos, podendo incluir informações adicionais como o status de validação (se essa opção for implementada).

## Instalando
**Instalando:** npm install teste.validaulr

## Testando Scripts
**Passando nome do arquivo ou pasta:** 

npm run cli ./arquivos/texto.md

*Retorna um array de link que são extaidos arquivo texto.md*

**Passando nome do arquivo ou pasta e validando links encontrados:** 

npm run cli ./arquivos/texto.md valida

*Retorna um array de link que são extaidos arquivo texto.md com as URL validadas atravez do flech*

**Sem precisar passar parametros:** 

npm run cli:arquivo - *Retorna um array de link que são extaidos arquivo texto.md*

npm run cli:pasta - *Retorna um array de link que são extaidos de uma pasta*

npm run cli:arquivo valida - *Retorna um array de link que são extaidos arquivo texto.md  com as URL validadas atravez do flech*

npm run cli:pasta valida - *Retorna um array de link que são extaidos de uma pasta  com as URL validadas atravez do flech*