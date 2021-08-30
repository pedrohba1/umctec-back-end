## 📝 Content table

- [About](#about)
- [Setup](#getting_started)

## 🧐 About <a name = "about"></a>

NodeJS boiler plate. Comes with sequelize, jest, eslint, prettier and youch.
**This boilerplate uses node version 12.**

## 🏁 Setup <a name = "getting_started"></a>

To run this backend you simply need to create a docker container with the following commands:

```
docker run --name boilerplate -e  POSTGRES_USER=boilerplate -e POSTGRES_PASSWORD=admin -p 5433:5432 -d postgres
```

After that, copy the contents of `.env.development` into `.env` and run the migrations with: `yarn sequelize db:migrate`.

Keep in mind that the `DB_NAME` will be the same as `DB_USER` if you don't specify it in container creation command above.







