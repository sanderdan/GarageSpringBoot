package se.likfarmenhet.garage.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import se.likfarmenhet.garage.model.Service;

/**
 *
 * @author Alexander
 */
@Repository
public interface ServiceRepository extends CrudRepository<Service, Integer> {
    
}
