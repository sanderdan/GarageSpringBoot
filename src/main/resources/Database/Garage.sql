DROP DATABASE IF EXISTS `garage`;
CREATE DATABASE `garage`;
USE `garage`;

CREATE TABLE `Customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `mail` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `street` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `gender` enum('M','F', '') DEFAULT NULL,
  `ssn` varchar(45) NOT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `ssn_UNIQUE` (`ssn`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

CREATE TABLE `Mechanic` (
  `employee_number` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  PRIMARY KEY (`employee_number`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE `Vehicle` (
  `vehicle_id` int(11) NOT NULL AUTO_INCREMENT,
  `license_plate` varchar(45) NOT NULL,
  `manufacturer` varchar(45) NOT NULL,
  `model` varchar(45) DEFAULT NULL,
  `model_year` varchar(45) DEFAULT NULL,
  `fuel` varchar(45) DEFAULT NULL,
  `odometer` varchar(45) DEFAULT NULL,
  `notes` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`vehicle_id`),
  UNIQUE KEY `license_plate_UNIQUE` (`license_plate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Service` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `license_plate` varchar(45) NOT NULL,
  `employee_number` int(11) NOT NULL,
  `service_date` datetime NOT NULL,
  `service_status` enum('DONE','BOOKED','ABSENT') NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`service_id`),
  KEY `customer_id_idx` (`customer_id`),
  KEY `employee_number_idx` (`employee_number`),
  CONSTRAINT `customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `employee_number` FOREIGN KEY (`employee_number`) REFERENCES `mechanic` (`employee_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `license_plate` FOREIGN KEY (`license_plate`) REFERENCES `vehicle` (`license_plate`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;