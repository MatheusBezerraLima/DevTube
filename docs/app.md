# DevTube


### Descrição 
O DevTube è um gerenciador de vídeos voltado para tecnologia, conectando o usuário aos melhores conteúdos sobre Desenvolvimento Front-end, Back-end, Infraestrutura, Hardware e muito mais!

🔹 Encontre vídeos organizados por categoria e nível de dificuldade

🔹 Aprimore suas habilidades com conteúdos atualizados e relevantes

### Dominio
Podcasts feitos em vídeos

### Features
 - Listar os vídeos relacionados ao mundo de TI em sessões de categorias
    -[Front-end, Back-end, Infra & DevOps, Banco de Dados]
 - Filtrar vídeos por nível de conhecimento
 - Filtrar vídeos por Técnologia específica
 - Filtrar por Idioma
 - Filtrar por popularidade
 - Filtrar por Data de Publicação   

## Como

#### Feature:

 - Listar os vídeos relacionados ao mundo de TI em sessões de categorias

### Como implementar
    GET: Retornar em uma api rest(json) o nome do canal, nome do vídeo, nome da técnologia, imagem de capa e o link

```js
{
    {
    canalName: "DevClub",
    videoName: "Criando uma API do ZERO com Node.js e Banco de Dados",
    videoId: "PyrMT0GA3sE",
    cover: "https://i.ytimg.com/vi/PyrMT0GA3sE/maxresdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCXl3S46whzRbEAzhq0LxtDcv47cQ",
    link: "https://www.youtube.com/watch?v=PyrMT0GA3sE&t=1968s",
    category: ["Front-end", "Back-end", "Infra & DevOps", "Banco de Dados"]
    techName: "Node.js",
    language: "portugues",
    views: "130K",
    datePublication:  "",
    },

    {
    canalName: "DevClub",
    videoName: "Criando uma API do ZERO com Node.js e Banco de Dados",
    videoId: "PyrMT0GA3sE",
    cover: "https://i.ytimg.com/vi/PyrMT0GA3sE/maxresdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCXl3S46whzRbEAzhq0LxtDcv47cQ",
    link: "https://www.youtube.com/watch?v=PyrMT0GA3sE&t=1968s",
    category: ["Front-end", "Back-end", "Infra & DevOps", "Banco de Dados"]
    techName: "Node.js",
    language: "portugues",
    views: "130K",
    datePublication:  "",
    },
 
}
```