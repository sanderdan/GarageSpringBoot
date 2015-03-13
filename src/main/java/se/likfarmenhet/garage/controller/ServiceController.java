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

    @Autowired
    ServiceRepository serviceRepository;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Service createService(@RequestBody Service service) {
        if (service.getId() == null) {
            serviceRepository.save(service);
        } else {
            updateService(service);
        }
        return service;
    }

    @RequestMapping(value = "/{service_id}", method = RequestMethod.GET)
    public Service findServiceById(@PathVariable int service_id) {
        Service service = serviceRepository.findOne(service_id);
        return service;
    }

    @RequestMapping(value = "/date/{service_id}", method = RequestMethod.GET)
    public String findServiceDateById(@PathVariable int service_id) {
        Service service = serviceRepository.findOne(service_id);
        return service.getService_date();
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

        Service original = serviceRepository.findOne(service.getId());

        original.setCustomer(service.getCustomer());
        original.setVehicle(service.getVehicle());
        original.setMechanic(service.getMechanic());
        original.setService_date(service.getService_date());
        original.setService_status(service.getService_status());
        original.setDescription(service.getDescription());

        return serviceRepository.save(original);
    }

    @RequestMapping(value = "/stats/{fromDate}/{toDate}", method = RequestMethod.GET)
    public Iterable<Service> findByServiceDate(@PathVariable String fromDate, @PathVariable String toDate) {
        Iterable<Service> services = serviceRepository.findByServiceDate(fromDate, toDate);
        return services;
    }

    @RequestMapping(value = "/filter/{vehicleId}", method = RequestMethod.POST)
    public Iterable<Service> getServicesByVehicleId(@PathVariable int vehicleId) {
        Iterable<Service> services = serviceRepository.findByVehicleId(vehicleId);
        return services;
    }

}
