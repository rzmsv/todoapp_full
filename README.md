# Todo App 

## Description
I wrote this app for Part AI challenge.
***
## Details
- Programming lang: Javascript
- Runtime envronment: Nodejs
- Database: PostgreSQL
- ORM: Sequelize
- Web app framework: ExpresJS
- Test framework: Jest & Supertest
- Paas: Docker

***
## Running the development ENV
1. Change ``.env.example`` to ``.env``
2. Change NODE_ENV's value that in .env to development 
``NODE_ENV=development``
3. Install Docker on your system
4. Run blow command in command line
```bash 
npm run dev:db:restat # For first time #
```
```bash 
npm run seq:migrate # For first time #
```
5. For run app
```bash 
npm run start:dev:docker
```
## Running the test ENV
1. Change ``.env.example`` to ``.env``
2. Change NODE_ENV's value that in .env to test 
``NODE_ENV=test``
3. Install Docker on your system
4. Run blow command in command line
```bash 
npm run test:db:restat # For first time #
```
```bash 
npm run seq:migrate # For first time #
```
5. For run test
```bash 
npm run test
```
## Stay in touch
- Author - [Reza Mousavi](https://www.linkedin.com/in/rzms/)

## License
Express is [ISC licensed](LICENSE).