## Backend Aplicação Tindev da Rocketseat

Desenvolvido na Semana Oministack da Rocketseat. A API foi desenvolvida com o framework NodeJS e banco de dados noSQL MongoDB. 
O objetivo é fazer a entrada na aplicação com o user do Github e dar like ou dislike em outros usuários que já estão cadastrados na aplicação Tindev.

REST Client utilizado: [Insomnia](https://insomnia.rest/)

### METÓDO POST Cadastrar dev:
O cadastro é feito com o username do Github do desenvolvedor dentro do JSON.
![cadastrar_dev](https://user-images.githubusercontent.com/54041351/62906896-286bec80-bd47-11e9-9b39-28b3be845de2.png)

### MÉTODO POST Like:
Na URL/HTTP contém o _id do usuário do Github que está recebendo o Like do usuário que está logado. A informação do usuário logado(_id) está no Header da requisição.
![like_dev](https://user-images.githubusercontent.com/54041351/62906930-55b89a80-bd47-11e9-88f2-f8c55823db2d.png)

### MÉTODO POST Dislike:
Assim como o método Like, na URL/HTTP contém o _id do usuário do Github que está recebendo o Dislike do usuário que está logado. A informação do usuário logado(_id) está no Header da requisição.
![dislike_dev](https://user-images.githubusercontent.com/54041351/62906938-5cdfa880-bd47-11e9-8521-f5e8688e6282.png)

Curso dado pela [Rocketseat](https://rocketseat.com.br/).
