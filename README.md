# UCMTEC back-end

## 📝 Content table

- [About](#about)
- [Setup](#getting_started)
- [Testing](#tests)
- [Roadmap](#roadmap)


## 🧐 About <a name = "about"></a>

This is a Back-end created (from my nodejs REST Api template) for the UMCTEC test.
**This back-end uses node version 12, so be sure to use this version when running this code.**

## 🏁 Setup <a name = "getting_started"></a>

To run this backend you simply need to create a docker container with the following commands:

```
docker run --name umctec -e  POSTGRES_USER=umctec -e POSTGRES_PASSWORD=admin -p 5433:5432 -d postgres
```

After that, copy the contents of `.env.dev` into `.env`, insert the correct variable names and run the migrations with: `yarn sequelize db:migrate`.

Keep in mind that the `DB_NAME` will be the same as `DB_USER` if you don't specify it in container creation command above.

When running this API locally, be sure to fill `.env` and `.env.dev` with the same variables. This is because running sequelize commands on terminal wil also launch `bootstrap.js` to get variables and they will be get from `.env` while your database connections when running the API will come from `.env.dev`.

## 🏁 Testing <a name = "tests"></a>

To execute tests, you need to create a testing database:

```
docker run --name test -e  POSTGRES_USER=test -e POSTGRES_PASSWORD=admin -p 5434:5432 -d postgres
```

After that, copy the contents of `.env.example` into `.env.test` and insert the variables accordingly  The test scripts in the `package.json` file will handle migrations, don't worry.

The tests are using the seeds. If the seeding script does not run for some reason, tests will mostly fail.

## Roadmap <a name = "roadmap"></a>

1. make the endpoints and all code related to storing and fetching them from the database:
- [X] POST - Create activity
- [X] GET - List activities
- [X] Seed activities via Sequelize.
- [X] POST - Create card
- [X] GET - List cards
- [X] Seed Cards via Sequelize. In the front-end repository of the test, there is a json that contains mocked data.


2. Implement bonuses:
- [X] Swagger
- [ ] Unit tests
- [X] Integration tests
- [ ] Host REST Api in a server









