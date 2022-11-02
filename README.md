# APP Lanchonete

Aplicação desenvolvida durante as aulas de React da turma FullStack 06 da Digital College, as segundas-feiras a noite.

## Tutorial para executar a aplicação
Abaixo você verá alguns passos para colocar a aplicação para rodar.

### Passo 1 - Clonar a aplicação
`git clone https://github.com/digitalcollege-fortal/app-lanchonete`

### Passo 2 - Instalar dependencias
Entre no diretório da aplicação e instale os pacotes necessários:

- `npm install`
- `npm install -g json-server`

### Passo 3 - Subir o servidor da API
- `npx json-server db.json --port 8000`

Isso fará com que a API fique disponivel no endereço http://localhost:8000

### Passo 4 - Subir o servidor do React
Em outra aba do terminal execute:
- `npm start`

Isso fará com que uma janela no navegador se abra com a aplicação, em http://localhost:3000
