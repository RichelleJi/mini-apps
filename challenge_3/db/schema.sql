
DROP DATABASE IF EXISTS checkoutApp;

CREATE DATABASE checkoutApp;

USE checkoutApp;

CREATE TABLE IF NOT EXISTS UserInfo (
	ID INT AUTO_INCREMENT,
	name VARCHAR(100), 
	email VARCHAR(100),
	password VARCHAR(100), 
	shipAddress VARCHAR(100), 
	phoneNumber INT,
	creditCard INT, 
	PRIMARY KEY(id)
);


