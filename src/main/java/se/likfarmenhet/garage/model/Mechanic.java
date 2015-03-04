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
public class Mechanic implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer employee_number;
    @Column
    private String first_name;
    @Column
    private String last_name;

    public Mechanic() {}

    @Override
    public String toString() {
        return "Mechanic{" + ", employee_number=" + employee_number + ", first_name=" + first_name + ", last_name=" + last_name + '}';
    }

    public Integer getEmployee_number() {
        return employee_number;
    }

    public void setEmployee_number(int employee_number) {
        this.employee_number = employee_number;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

}
