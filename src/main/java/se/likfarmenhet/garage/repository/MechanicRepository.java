package se.likfarmenhet.garage.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import se.likfarmenhet.garage.model.Mechanic;

/**
 *
 * @author Alexander
 */
@Repository
public interface MechanicRepository extends CrudRepository<Mechanic, Integer> {
    
}
