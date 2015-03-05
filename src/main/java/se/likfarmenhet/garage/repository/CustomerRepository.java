package se.likfarmenhet.garage.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import se.likfarmenhet.garage.model.Customer;

/**
 *
 * @author Alexander
 */
@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {
    
    public Customer findBySsn(String ssn);
        
}
