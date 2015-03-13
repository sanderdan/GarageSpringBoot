package se.likfarmenhet.garage.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import se.likfarmenhet.garage.model.Service;

/**
 *
 * @author Alexander
 */
@Repository
public interface ServiceRepository extends CrudRepository<Service, Integer> {

    @Query("SELECT s FROM Service s "
            + "WHERE s.customer.id = s.customer AND s.service_date >= :fromDate AND s.service_date <= :toDate")
    public List<Service> findByServiceDate(@Param("fromDate") String fromDate, @Param("toDate") String toDate);

    @Query("SELECT s FROM Service s "
            + "WHERE vehicle_id = :vehicleId")
    public List<Service> findByVehicleId(@Param("vehicleId") int vehicleId);

}
