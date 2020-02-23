# API boilerplate
TypeScript API boilerplate using Express, PostgreSQL and JSON Web Token.

### Features

- JWT (JSON Web Token) authentication;
- PostgreSQL connection template;
- Database transactions with shared pool.;
- Component oriented folder structure;
- TypeScript Interfaces;
- ESLint;
- Nodemon live-reload;

## Getting Started
These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

```bash
Node@^v12.x.x
PostgreSQL@^11.x.x
```

### Installing
Make sure you have a PostgreSQL database set up

```bash
#!/bin/bash
$ git clone https://github.com/thiago4455/typescript-api-boilerplate.git
$ cd typescript-api-boilerplate
$ npm instal

# Start server
$ npm start
```
Now configure your secret key and database connection using the `src/utils/global-config.json` file.

## Authors

* **[Thiago Mattos](https://github.com/thiago4455/)** - *Initial work*
