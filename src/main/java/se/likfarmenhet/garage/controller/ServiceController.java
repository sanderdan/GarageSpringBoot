package se.likfarmenhet.garage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import se.likfarmenhet.garage.model.Service;
import se.likfarmenhet.garage.repository.ServiceRepository;

/**
 *
 * @author Alexander
 */
@RestController
@RequestMapping(value = "/service")
public class ServiceController {

    @RequestMapping(value = "html", method = RequestMethod.GET)
    public String startHtml() {
        return "/service.html";
    }
    
    @Autowired
    ServiceRepository serviceRepository;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Service createService(@RequestBody Service service) {
        service = serviceRepository.save(service);
        return service;
    }
    
    @RequestMapping(value = "/{service_id}", method = RequestMethod.GET)
    public Service findServiceById(@PathVariable int service_id) {
        Service service = serviceRepository.findOne(service_id);
        return service;
    }
    
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public Iterable<Service> findAllServices() {
        Iterable<Service> services = serviceRepository.findAll();
        return services;
    }
    
     @RequestMapping(value = "/remove/{service_id}", method = RequestMethod.POST)
    public void removeService(@PathVariable int service_id) {
        serviceRepository.delete(service_id);
    }
    
    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Service updateService(@RequestBody Service service) {
        if (service.getService_id() == null) {
            throw new RuntimeException("NOT FOUND");
        }
        
        Service original = serviceRepository.findOne(service.getService_id());
        
        original.setCustomer_id(service.getCustomer_id());
        original.setLicense_plate(service.getLicense_plate());
        original.setEmployee_number(service.getEmployee_number());
        original.setService_date(service.getService_date());
        original.setService_status(service.getService_status());
        original.setDescription(service.getDescription());
        
        return serviceRepository.save(original);
    }
    
}
