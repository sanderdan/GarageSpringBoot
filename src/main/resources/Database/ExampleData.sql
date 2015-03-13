-- CUSTOMER
INSERT INTO Customer(id, first_name, last_name, mail, phone, street, city, zip, gender, ssn)
VALUES (1,'Sten','Hoijt','stenen@gmail.se','0702234567','Rubinvägen 56','Lödöse','41477','M','7001221342'),
(2,'Egon','Abrahamsson','egon-abrahamsson@hotmail.com','0702123456','Grusochgranitgången 2','Oskarshamn','77245','M','6904304214'),
(3,'Kristina','Duve','kristinis@passagen.se','0706345678','Bagaregatan 32','Duvemåla','11254','F','5401012242'),
(4,'Rolf','Lassgård','lasse_likes_ladies@msn.com','0703123456','Ungtuppsvägen 69','Smeksta','69691','M','6909165525'),
(5,'Lisa','Lassgård','liisa@hotmail.com','0702654321','Ungtuppsvägen 69','Smeksta','69691','F','7208016653'),
(6,'Bernt','Gustavsson','Gusten_Bernt@telia.se','0703567894','Hammarhöjden 7','Hjo','22152','M','8101227474'),
(7,'Olof','Johansson','loffe@hotmail.se','0708216549','Stureplanen 11C','Ålem','52141','M','8806275542'),
(8,'Hanna','Vreckt','vreckingball@msn.com','0700223344','Tåggatan 2','Dals-Ed','74822','F','6302285504'),
(9,'Torbjörn','Strutz','strutzen@hotmail.com','0707456789','Operavägen 21','Hjulsta','41252','M','5908062201'),
(10,'Håkan','Kethis','hkhkhkhk@telia.se','0702583691','Guntorpsvägen 3','Lagringstad','11010','M','8511115774'),
(11,'Robert','Gröt', '', '', '', '', '', '', '5512244242'),
(12,'Fredrika','Danielsson', '', '', '', '', '', '', '8911247744'),
(13,'Tyra','Adielsson', '', '', '', '', '', '', '8809084202'),
(14,'Dennis','Tjallander', '', '', '', '', '', '', '8606304411'),
(15,'Bernt','Fredriksson', '', '', '', '', '', '', '5708094211'),
(16,'Barbro','Duns', '', '', '', '', '', '', '6912013325'),
(17,'Richardo','DeRossi', '', '', '', '', '', '', '7405074241');

-- MECHANIC
INSERT INTO Mechanic(id, first_name, last_name)
VALUES (1, 'Valter', 'Svensson'),
(2, 'Gustaf', 'Håkansson'),
(3, 'Tina', 'Bryhe');

-- VEHICLE
INSERT INTO Vehicle(id, license_plate, manufacturer, model, model_year, fuel, odometer)
VALUES ('1', 'STENEN', 'FORD', 'MUSTANG', '1972', '', ''),
('2', 'ORF552', 'KIA', 'CEED', '2009', 'DIESEL', '22401'),
('3', 'PKU432', 'VOLVO', 'S60', '2007', 'GASOLINE', '11547'),
('4', 'NWF221', 'VOLVO', 'V50', '2014', 'GASOLINE', '1532'),
('5', 'MAC927', 'VOLVO', 'V50', '2011', 'BIFUEL', '12450'),
('6', 'HHU453', 'OPEL', 'ASTRA', '2004', 'GASOLINE', ''),
('7', 'BOSS1N', 'BMW', 'M3', '2001', 'DIESEL', ''),
('8', 'GGF432', 'MERCEDES', '', '', 'GASOLINE', ''),
('9', 'HHD212', 'FORD', 'MONDEO', '', '', ''),
('11', 'LLP989','KIA','CEED', '', '', ''),
('12', 'KLM555','REANULT','LAGUNA', '', '', ''),
('10', 'BKS231','FORD', '', '', '', ''),
('13', 'SSD332','NISSAN', '', '', '', ''),
('14', 'APA003','AUDI', '', '', '', ''),
('15', 'FIS100','MERCEDES', '', '', '', ''),
('16', 'BFF443','BMW', '', '', '', '');

-- SERVICE
INSERT INTO Service(id, customer_id, vehicle_id, mechanic_id, service_date, service_status, description)
VALUES (1, 1, 1, 1, '2015-01-02 08:30:00.0', 'DONE', ''),
(2, 2, 7, 3, '2015-01-04 14:45:00.0', 'DONE', '');