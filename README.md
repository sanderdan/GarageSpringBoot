# GarageSpringBoot

The SQL-files to create tables and data are located in /resources/Database
1. Run Garage.sql to create the tables.
2. Run ExampleData.sql to fill them with data.

To run the project:
First go into application-context.xml(located in /src/main/resources/META-INF/) and change the values for
<property name="username" value="USERNAME" />
<property name="password" value="PASSWORD" />

Then right click on pom.xml, Run Maven --> spring-boot-run

Open up localhost:8080 in your browser and you should find the index.

Have fun! :]
