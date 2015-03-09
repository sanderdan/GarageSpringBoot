-- CUSTOMER
INSERT INTO Customer(customer_id, first_name, last_name, mail, phone, street, city, zip, gender, ssn)
VALUES (1,'Sten','Hoijt','stenen@gmail.se','0702234567','Rubinvägen 56','Lödöse','41477','M','700122-1342'),
(2,'Egon','Abrahamsson','egon-abrahamsson@hotmail.com','0702123456','Grusochgranitgången 2','Oskarshamn','77245','M','690430-4214'),
(3,'Kristina','Duve','kristinis@passagen.se','0706345678','Bagaregatan 32','Duvemåla','11254','F','540101-2242'),
(4,'Rolf','Lassgård','lasse_likes_ladies@msn.com','0703123456','Ungtuppsvägen 69','Smeksta','69691','M','690916-5525'),
(5,'Lisa','Lassgård','liisa@hotmail.com','0702654321','Ungtuppsvägen 69','Smeksta','69691','F','720801-6653'),
(6,'Bernt','Gustavsson','Gusten_Bernt@telia.se','0703567894','Hammarhöjden 7','Hjo','22152','M','810122-7474'),
(7,'Olof','Johansson','loffe@hotmail.se','0708216549','Stureplanen 11C','Ålem','52141','M','880627-5542'),
(8,'Hanna','Vreckt','vreckingball@msn.com','0700223344','Tåggatan 2','Dals-Ed','74822','F','630228-5504'),
(9,'Torbjörn','Strutz','strutzen@hotmail.com','0707456789','Operavägen 21','Hjulsta','41252','M','590806-2201'),
(10,'Håkan','Kethis','hkhkhkhk@telia.se','0702583691','Guntorpsvägen 3','Lagringstad','11010','M','851111-5774'),
(11,'Robert','Gröt', '', '', '', '', '', '', '551224-4242'),
(12,'Fredrika','Danielsson', '', '', '', '', '', '', '891124-7744'),
(13,'Tyra','Adielsson', '', '', '', '', '', '', '880908-4202'),
(14,'Dennis','Tjallander', '', '', '', '', '', '', '860630-4411'),
(15,'Bernt','Fredriksson', '', '', '', '', '', '', '570809-4211'),
(16,'Barbro','Duns', '', '', '', '', '', '', '691201-3325'),
(17,'Richardo','DeRossi', '', '', '', '', '', '', '740507-4241');

-- MECHANIC
INSERT INTO Mechanic(employee_number, first_name, last_name)
VALUES (1, 'Valter', 'Svensson'),
(2, 'Gustaf', 'Håkansson'),
(3, 'Tina', 'Bryhe');

-- VEHICLE
INSERT INTO Vehicle(vehicle_id, license_plate, manufacturer, model, model_year)
VALUES ('1', 'STENEN', 'FORD', 'MUSTANG', '1972');
INSERT INTO Vehicle(vehicle_id, license_plate, manufacturer, model, model_year, fuel, odometer)
VALUES ('2', 'ORF552', 'KIA', 'CEED', '2009', 'DIESEL', '22401'),
('3', 'PKU432', 'VOLVO', 'S60', '2007', 'GASOLINE', '11547'),
('4', 'NWF221', 'VOLVO', 'V50', '2014', 'GASOLINE', '1532'),
('5', 'MAC927', 'VOLVO', 'V50', '2011', 'BIFUEL', '12450');
INSERT INTO Vehicle(vehicle_id, license_plate, manufacturer, model, model_year, fuel)
VALUES ('6', 'HHU453', 'OPEL', 'ASTRA', '2004', 'GASOLINE'),
('7', 'BOSS1N', 'BMW', 'M3', '2001', 'DIESEL');
INSERT INTO Vehicle(vehicle_id, license_plate, manufacturer, fuel)
VALUES ('8', 'GGF432', 'MERCEDES', 'GASOLINE');
INSERT INTO Vehicle(vehicle_id, license_plate, manufacturer, model)
VALUES ('9', 'HHD212', 'FORD', 'MONDEO'),
('11', 'LLP989','KIA','CEED'),
('12', 'KLM555','REANULT','LAGUNA');
INSERT INTO Vehicle(vehicle_id, license_plate, manufacturer)
VALUES ('10', 'BKS231','FORD'),
('13', 'SSD332','NISSAN'),
('14', 'APA003','AUDI'),
('15', 'FIS100','MERCEDES'),
('16', 'BFF443','BMW');

-- SERVICE
INSERT INTO Service(service_id, customer_id, license_plate, employee_number, service_date, service_status)
VALUES (1, 1, 'STENEN', 1, '2014-12-28 08:30:00.0', 'DONE'),
(2, 3, 'ORF552', 2, '2014-12-28 09:45:00.0', 'DONE'),
(3, 2, 'PKU432', 3, '2014-12-28 11:30:00.0', 'DONE'),
(4, 3, 'NWF221', 1, '2014-12-29 11:55:00.0', 'DONE'),
(5, 5, 'MAC927', 2, '2014-12-29 12:30:00.0', 'DONE'),
(6, 10, 'HHU453', 3, '2015-01-04 08:30:00.0', 'DONE'),
(7, 9, 'BOSS1N', 3, '2015-01-04 14:55:01.0', 'DONE'),
(8, 8, 'GGF432', 2, '2015-01-05 14:55:01.0', 'DONE');
INSERT INTO Service(service_id, customer_id, license_plate, employee_number, service_date, service_status, description)
VALUES (9, 7, 'HHD212', 1, '2015-01-05 14:55:01', 'DONE', 'Skulle återkomma i maj för att ev. göra ny service'),
(10, 1, 'STENEN', 1, '2015-01-05 14:55:01', 'DONE', 'Väldigt nöjd'),
(11, 5, 'MAC927', 1, '2015-01-05 14:55:01', 'BOOKED', 'Ge rabatt, återkommande kund'),
(12, 1, 'PKU432', 1, '2015-01-06 14:55:01', 'BOOKED', 'Kunden vill byta olja, filter och allmänt se över bilen.'),
(13, 1, 'NWF221', 1, '2015-01-06 14:55:01', 'BOOKED', 'Ge rabatt, återkommande kund'),
(14, 1, 'STENEN', 1, '2015-01-06 14:55:01', 'BOOKED', 'Ge rabatt, återkommande kund'),
(15, 1, 'HHD212', 3, '2014-12-28 12:00:00', 'ABSENT', 'fakturera kund, dök inte upp'),
(16, 1, 'HHD212', 3, '2014-12-29 10:00:00', 'ABSENT', 'fakturera kund, dök inte upp, igen'),
(17, 1, 'HHD212', 3, '2015-01-04 12:00:00', 'ABSENT', 'fakturera kund, dök inte upp, igen');