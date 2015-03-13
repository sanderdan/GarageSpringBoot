package se.likfarmenhet.garage.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 *
 * @author Alexander
 */
@Entity
public class Service implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String service_date;
    private String service_status;
    private String description;
    
    @ManyToOne(fetch = FetchType.EAGER)
    private Customer customer;
    
    @ManyToOne(fetch = FetchType.EAGER)
    private Vehicle vehicle;
    
    @ManyToOne(fetch = FetchType.EAGER)
    private Mechanic mechanic;
    
    public Service() {}

    @Override
    public String toString() {
        return "Service{" + "id=" + id + ", service_date=" + service_date + ", service_status=" + service_status + ", description=" + description + ", customer=" + customer + ", vehicle=" + vehicle + ", mechanic=" + mechanic + '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getService_date() {
        return service_date;
    }

    public void setService_date(String service_date) {
        this.service_date = service_date;
    }

    public String getService_status() {
        return service_status;
    }

    public void setService_status(String service_status) {
        this.service_status = service_status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public Mechanic getMechanic() {
        return mechanic;
    }

    public void setMechanic(Mechanic mechanic) {
        this.mechanic = mechanic;
    }
    
}