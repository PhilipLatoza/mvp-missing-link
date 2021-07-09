DROP DATABASE IF EXISTS messages;
CREATE DATABASE messages;
USE messages;

CREATE TABLE allMessages (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(30), email VARCHAR(30), message VARCHAR(500), PRIMARY KEY(id));


-- mysql -u root -p < schema.sql