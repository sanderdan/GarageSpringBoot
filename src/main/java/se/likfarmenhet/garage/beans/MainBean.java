package se.likfarmenhet.garage.beans;

import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import se.likfarmenhet.garage.repository.CustomerRepository;
import se.likfarmenhet.garage.repository.MechanicRepository;
import se.likfarmenhet.garage.repository.ServiceRepository;
import se.likfarmenhet.garage.repository.VehicleRepository;

/**
 *
 * @author Alexander
 */
@Component
public class MainBean {

    @Autowired
    MechanicRepository mechanicRepository;
    
    @Autowired
    CustomerRepository customerRepository;
    
    @Autowired
    ServiceRepository serviceRepository;
    
    @Autowired
    VehicleRepository vehicleRepository;
    
    public MainBean() {}
    
    @PostConstruct
    public void init() {

//        Mechanic m1 = new Mechanic();
//        m1.setFirst_name("Sander");
//        m1.setLast_name("Danielsson");
//        
//        Customer c1 = new Customer();
//        c1.setFirst_name("Alexander");
//        c1.setLast_name("Claesson");
//        c1.setMail("alexander-claesson@hotmail.com");
//        c1.setPhone("0702507896");
//        c1.setStreet("KongahÃ¤llagan 48A");
//        c1.setCity("KungÃ¤lv");
//        c1.setZip("44238");
//        c1.setGender("M");
//        c1.setSsn("880922");
//        
//        
//        Vehicle v1 = new Vehicle();
//        v1.setLicense_plate("MAC972");   
//        v1.setManufacturer("FORD");
//        v1.setModel("Mustang");
//        v1.setModel_year("1972");
//        v1.setFuel("Gasoline");
//        v1.setOdometer("200133");
//        
//        customerRepository.save(c1);
//        mechanicRepository.save(m1);
//        vehicleRepository.save(v1);
//        
//        Service s1 = new Service();
//        s1.setCustomer(c1);
//        s1.setVehicle(v1);
//        s1.setMechanic(m1);
//        s1.setService_date("2014-02-11 14:55:01");
//        s1.setService_status("BOOKED");
//        s1.setDescription("Bilen behöver byta olja och filter, det är en parkeringsskada på högre bak-axel som PROFFSKOD");
//        
//        serviceRepository.save(s1);
//        
//        Iterable<Mechanic> mechanics = mechanicRepository.findAll();
//        for (Mechanic m : mechanics) {
//            System.out.println(m);
//        }
//        Iterable<Customer> customers = customerRepository.findAll();
//        for (Customer c : customers) {
//            System.out.println(c);
//        }
//        Iterable<Vehicle> vehicles = vehicleRepository.findAll();
//        for (Vehicle v : vehicles) {
//            System.out.println(v);
//        }
//        Iterable<Service> services = serviceRepository.findAll();
//        for (Service s : services) {
//            System.out.println(s);
//        }
        
    }
}
