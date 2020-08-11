

CREATE DATABASE burgers_db;
USE burgers_db;
--  * **id**: an auto incrementing int that serves as the primary key.
--  * **burger_name**: a string.
--  * **devoured**: a boolean.

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

