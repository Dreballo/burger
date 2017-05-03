/* Create the burgers_db

  Switch to or use the burgers_db.
  Create a burgers table with these fields:
  id: an auto incrementing int that serves as the primary key.
  burger_name: a string.
  devoured: a boolean.
  date: a TIMESTAMP.

*/

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN,
  date DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)

);



