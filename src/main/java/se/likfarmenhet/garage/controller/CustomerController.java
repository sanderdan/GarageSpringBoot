package se.likfarmenhet.garage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import se.likfarmenhet.garage.model.Customer;
import se.likfarmenhet.garage.repository.CustomerRepository;

/**
 *
 * @author Alexander
 */
@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Customer createCustomer(@RequestBody Customer customer) {
        String ssn = customer.getSsn();
        try {
            if (ssn.equalsIgnoreCase(findBySsn(ssn).getSsn())) {
                updateCustomer(customer);
            }
        } catch (NullPointerException e) {
            customer = customerRepository.save(customer);
        }
        return customer;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Customer findCustomerById(@PathVariable int id) {
        Customer customer = customerRepository.findOne(id);
        return customer;
    }

    @RequestMapping(value = "/ssn/{ssn}", method = RequestMethod.GET)
    public Customer findBySsn(@PathVariable String ssn) {
        Customer customer = customerRepository.findBySsn(ssn);
        return customer;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public Iterable<Customer> findAllCustomers() {
        Iterable<Customer> customers = customerRepository.findAll();
        return customers;
    }

    @RequestMapping(value = "/remove/{id}", method = RequestMethod.POST)
    public void removeCustomer(@PathVariable int id) {
        customerRepository.delete(id);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Customer updateCustomer(@RequestBody Customer customer) {

        Customer original = customerRepository.findBySsn(customer.getSsn());

        original.setFirst_name(customer.getFirst_name());
        original.setLast_name(customer.getLast_name());
        original.setMail(customer.getMail());
        original.setPhone(customer.getPhone());
        original.setStreet(customer.getStreet());
        original.setCity(customer.getCity());
        original.setZip(customer.getZip());
        original.setGender(customer.getGender());
        original.setSsn(customer.getSsn());

        return customerRepository.save(original);
    }

}
