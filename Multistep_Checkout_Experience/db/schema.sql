
DROP DATABASE IF EXISTS checkoutApp;

CREATE DATABASE checkoutApp;

USE checkoutApp;

CREATE TABLE IF NOT EXISTS UserInfo (
	ID INT AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL, 
	email VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL, 
	phoneNumber INT,
	shipAddress VARCHAR(100), 
	creditCard VARCHAR(100), 
	PRIMARY KEY(id)
);

USE checkoutApp;

