DROP DATABASE IF EXISTS `garage`;
CREATE DATABASE `garage`;
USE `garage`;

CREATE TABLE `Customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `mail` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `street` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `gender` enum('M','F', ''),
  `ssn` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ssn_UNIQUE` (`ssn`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

CREATE TABLE `Mechanic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE `Vehicle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `license_plate` varchar(45) NOT NULL,
  `manufacturer` varchar(45) NOT NULL,
  `model` varchar(45) DEFAULT NULL,
  `model_year` varchar(45) DEFAULT NULL,
  `fuel` varchar(45) DEFAULT NULL,
  `odometer` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `license_plate_UNIQUE` (`license_plate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Service` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `vehicle_id` int NOT NULL,
  `mechanic_id` int(11) NOT NULL,
  `service_date` datetime NOT NULL,
  `service_status` enum('DONE','BOOKED','ABSENT') NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (customer_id) REFERENCES Customer(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (mechanic_id) REFERENCES Mechanic(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (vehicle_id) REFERENCES Vehicle(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Customer_vehicles` (
`customer_id` INT NOT NULL ,
`vehicle_id` INT NOT NULL ,
FOREIGN KEY (customer_id) REFERENCES Customer(id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (vehicle_id) REFERENCES Vehicle(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;