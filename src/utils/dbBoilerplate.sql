CREATE DATABASE dbBoilerplate;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30),
  password CHAR(60)
);

INSERT INTO users (name, email, password)
  VALUES ('Bill', 'bill@example.com','$2a$10$euV/jvBL4n35i.tmW/qJvOhZTHpa/x5KJJljqGmfmxZbgor2Xj6Ui');