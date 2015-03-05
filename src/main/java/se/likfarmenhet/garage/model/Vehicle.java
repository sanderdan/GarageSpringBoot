package se.likfarmenhet.garage.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author Alexander
 */
@Entity
public class Vehicle implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer vehicle_id;
    @Column(name = "license_plate")
    private String licensePlate;
    @Column
    private String manufacturer;
    @Column
    private String model;
    @Column
    private String model_year;
    @Column
    private String fuel;
    @Column
    private String odometer;

    public Vehicle() {
    }

    @Override
    public String toString() {
        return "Vehicle{" + "vehicle_id=" + vehicle_id + ", license_plate=" + licensePlate + ", manufacturer=" + manufacturer + ", model=" + model + ", model_year=" + model_year + ", fuel=" + fuel + ", odometer=" + odometer + '}';
    }

    public Integer getVehicle_id() {
        return vehicle_id;
    }

    public String getLicense_plate() {
        return licensePlate;
    }

    public void setLicense_plate(String license_plate) {
        this.licensePlate = license_plate;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getModel_year() {
        return model_year;
    }

    public void setModel_year(String model_year) {
        this.model_year = model_year;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public String getOdometer() {
        return odometer;
    }

    public void setOdometer(String odometer) {
        this.odometer = odometer;
    }

}
