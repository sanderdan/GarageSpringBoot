package se.likfarmenhet.garage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import se.likfarmenhet.garage.model.Vehicle;
import se.likfarmenhet.garage.repository.VehicleRepository;

/**
 *
 * @author Alexander
 */
@RestController
@RequestMapping(value = "/vehicle")
public class VehicleController {

    @Autowired
    VehicleRepository vehicleRepository;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        String lp = vehicle.getLicensePlate();
        try {
            if (lp.equalsIgnoreCase(findByLicensePlate(lp).getLicensePlate())) {
                updateVehicle(vehicle);
            }
        } catch (NullPointerException e) {
            vehicle = vehicleRepository.save(vehicle);
        }
        return vehicle;
    }
        
    @RequestMapping(value = "/{vehicle_id}", method = RequestMethod.GET)
    public Vehicle getVehicleById(@PathVariable int vehicle_id) {
        return vehicleRepository.findOne(vehicle_id);
    }

    @RequestMapping(value = "/licensePlate/{licensePlate}", method = RequestMethod.GET)
    public Vehicle findByLicensePlate(@PathVariable String licensePlate) {
        Vehicle vehicle = vehicleRepository.findByLicensePlate(licensePlate);
        return vehicle;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public Iterable<Vehicle> findAllVehicle() {
        Iterable<Vehicle> vehicle = vehicleRepository.findAll();
        return vehicle;
    }

    @RequestMapping(value = "/remove/{vehicle_id}", method = RequestMethod.POST)
    public void removeVehicle(@PathVariable int vehicle_id) {
        vehicleRepository.delete(vehicleRepository.findOne(vehicle_id));
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Vehicle updateVehicle(@RequestBody Vehicle vehicle) {
//        if (vehicle.getVehicle_id() == null) {
//            throw new RuntimeException("NOT FOUND");
//        }

        Vehicle original = vehicleRepository.findByLicensePlate(vehicle.getLicensePlate());;

        original.setManufacturer(vehicle.getManufacturer());
        original.setModel(vehicle.getModel());
        original.setModel_year(vehicle.getModel_year());
        original.setFuel(vehicle.getFuel());
        original.setOdometer(vehicle.getOdometer());

        return vehicleRepository.save(original);
    }
}
