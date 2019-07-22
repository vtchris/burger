-- Drops the database if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  dt_stamp DATETIME,
  PRIMARY KEY (id)
);