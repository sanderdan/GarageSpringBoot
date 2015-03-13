package se.likfarmenhet.garage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import se.likfarmenhet.garage.model.Mechanic;
import se.likfarmenhet.garage.repository.MechanicRepository;

/**
 *
 * @author Alexander
 */
@RestController
@RequestMapping("/mechanic")
public class MechanicController {

    @Autowired
    MechanicRepository mechanicRepository;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Mechanic createMechanic(@RequestBody Mechanic mechanic) {
        if(mechanic.getId() == null) {
            mechanicRepository.save(mechanic);
        } else {
            updateMechanic(mechanic);
        }
        return mechanic;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Mechanic findMechanicById(@PathVariable int id) {
        Mechanic mechanic = mechanicRepository.findOne(id);
        return mechanic;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public Iterable<Mechanic> findAllMechanics() {
        Iterable<Mechanic> mechanics = mechanicRepository.findAll();
        return mechanics;
    }

    @RequestMapping(value = "/remove/{employee_number}", method = RequestMethod.POST)
    public void removeMechanic(@PathVariable int employee_number) {
        mechanicRepository.delete(employee_number);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Mechanic updateMechanic(@RequestBody Mechanic mechanic) {

        Mechanic original = mechanicRepository.findOne(mechanic.getId());

        original.setFirst_name(mechanic.getFirst_name());
        original.setLast_name(mechanic.getLast_name());

        return mechanicRepository.save(original);
    }

}