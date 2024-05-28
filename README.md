<br>
<div align="center">
    <a href="/"><img align="center" alt="Gist" src="./docs/badges/flags/brazil-flag.svg"> Portugues (PT-BR) </a>|
    <a href="/"><img align="center" alt="Gist" src="./docs/badges/flags/usa-flag.svg"> Ingles (EN-US) </a>|
    <a href="/"><img align="center" alt="LinkedIn" src="./docs/badges/flags/spain-flag.svg"> Espanhol (ES-ES) </a>
</div>
<br>

Esta API foi desenvolvida para ajudar lanchonetes e restaurantes a gerenciar de forma eficiente os pedidos dos clientes, automatizando o processo de pedidos e integrando-os diretamente com a cozinha e o sistema de estoque. Através desta API, você pode implementar um sistema de autoatendimento que melhora a experiência do cliente, reduz erros e aumenta a eficiência operacional.

A documentação do sistema (DDD) com Event Storming segue abaixo (escolha o sistema que você tem mais afinidade):

- **Miro**: https://miro.com/app/board/uXjVKLXulkE=/
- **Figjan**: https://www.figma.com/file/zar1928WLEYwOZNm4TsXYI/FIAP---Tech-Challenge-%2301?type=whiteboard&node-id=0-1

<!-- - [Documentação do Sistema](./docs/README.md) -->

## Sumário dos Conteúdos que podem ser encontrados neste README

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [ADR's](#adrs)
    - [Arquitetura Hexaganal ou Clean Architecture](#arquitetura)
    - [Banco de dados Relacional ou Banco nao relacional](#banco-de-dados)
    - [ORM ou Query Builder](#orm)
    - [TypeORM ou Prisma](#typeorm)
    - [Linguagem GO, Python o Javascript com superset Typescript](#linguagem)
    - [Framework Express ou Nest.js](#framework)
- [Como Executar o Projeto](#como-executar-o-projeto)
  - [Documentação da API](#documentação-da-api)
    - [Swagger preview](#swagger-preview)
    - [Endpoints](#endpoints)
      - [Usuários](#usuarios)
      - [Categorias](#categorias)
      - [Produtos](#produtos)
      - [Pedidos](#pedidos)
  - [Executando o Projeto](#executando-o-projeto)
    - [Requisitos](#usuarios)
    - [Clonando o Repositório](#clonando-o-repositório)
    - [Instalando as Dependências](#instalando-as-dependências)
    - [Configurando o Banco de Dados](#configurando-o-banco-de-dados)
      - [Executando as Migrações](#executando-as-migrações)
    - [Docker](#docker)
      - [Executando o Docker](#executando-o-docker)
