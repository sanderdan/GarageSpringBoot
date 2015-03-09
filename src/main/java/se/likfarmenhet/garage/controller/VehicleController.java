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

//    @RequestMapping(value = "html", method = RequestMethod.GET)
//    public String startHtml() {
//        return "/create.html";
//    }
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        
        System.out.println(vehicle);
        String lp = vehicle.getLicense_plate();
        try {
//            (ssn.equalsIgnoreCase(findBySsn(ssn).getSsn())) {
            if (lp.equalsIgnoreCase(findByLicensePlate(lp).getLicense_plate())) {
                System.out.println("trying to update");
                updateVehicle(vehicle);
            }
        } catch (NullPointerException e) {
            System.out.println("didnt find customer with same ssn, saving");
            vehicle = vehicleRepository.save(vehicle);
        }
        return vehicle;
    }
        
        
//    }
//        System.out.println(vehicle);
//        String license_plate = vehicle.getLicense_plate();
//
//        try {
//            if (license_plate.equalsIgnoreCase(getByVehicleLicensePlate(license_plate).getLicense_plate())) {
//                System.out.println("Found vehicle with same license plate, trying to update.");
//                System.out.println(vehicle);
////                updateVehicle(vehicle);
//            }
//
//        } catch (NullPointerException e) {
//            System.out.println("Didn't find vehicle with same license plate, saving.");
//            vehicle = vehicleRepository.save(vehicle);
//            System.out.println(vehicle);
//        }
//
//        return vehicle;
//
//    }

    @RequestMapping(value = "/{vehicle_id}", method = RequestMethod.GET)
    public Vehicle getVehicleById(@PathVariable int vehicle_id) {
        return vehicleRepository.findOne(vehicle_id);
    }

    @RequestMapping(value = "/licensePlate/{license_plate}", method = RequestMethod.GET)
    public Vehicle findByLicensePlate(@PathVariable String license_plate) {
        Vehicle vehicle = vehicleRepository.findByLicensePlate(license_plate);
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

        Vehicle original = (Vehicle) vehicleRepository.findOne(vehicle.getVehicle_id());

        original.setLicense_plate(vehicle.getLicense_plate());
        original.setManufacturer(vehicle.getManufacturer());
        original.setModel(vehicle.getModel());
        original.setModel_year(vehicle.getModel_year());
        original.setFuel(vehicle.getFuel());
        original.setOdometer(vehicle.getOdometer());

        return vehicleRepository.save(original);
    }
}
