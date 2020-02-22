CREATE DATABASE dbBoilerplate;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO users (name, email)
  VALUES ('Bill', 'bill@boilerplateapi.com');