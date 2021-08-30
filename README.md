# UCMTEC back-end

## 📝 Content table

- [About](#about)
- [Setup](#getting_started)

## 🧐 About <a name = "about"></a>

This is a Back-end created (from my nodejs REST Api template) for the UMCTEC test.
**This back-end uses node version 12, so be sure to use this version when running this code.**

## 🏁 Setup <a name = "getting_started"></a>

To run this backend you simply need to create a docker container with the following commands:

```
docker run --name umctec -e  POSTGRES_USER=umctec -e POSTGRES_PASSWORD=admin -p 5433:5432 -d postgres
```

After that, copy the contents of `.env.development` into `.env` and run the migrations with: `yarn sequelize db:migrate`.

Keep in mind that the `DB_NAME` will be the same as `DB_USER` if you don't specify it in container creation command above.







