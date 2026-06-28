package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

/*
 * AdminUser represents a system administrator in the clinic.
 *
 * Responsibilities:
 * - Manage system access
 * - Track security incidents
 * - Handle HIPAA compliance logging
 *
 * Implements:
 * HIPAACompliantUser:
 * - assignPin()
 * - accessAuthorized()
 *
 * HIPAACompliantAdmin:
 * - reportSecurityIncidents()
 */
public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {

    /*
     * Unique employee ID (same as User id conceptually)
     */
    private Integer employeeID;

    /*
     * Role of the admin (e.g., "Companion", "Manager")
     */
    private String role;

    /*
     * List of security incidents for auditing purposes.
     *
     * Each entry contains:
     * - timestamp
     * - admin ID
     * - incident description
     */
    private ArrayList<String> securityIncidents;


    /*
     * Constructor
     *
     * Initializes admin with:
     * - ID (from User)
     * - role
     * - empty incident log list
     */
    public AdminUser(Integer id, String role) {
        super(id);

        this.employeeID = id;
        this.role = role;

        this.securityIncidents = new ArrayList<>();
    }


    /*
     * Manually logs a security incident
     */
    public void newIncident(String notes) {

        String report = String.format(
                "Datetime Submitted: %s \nReported By ID: %s\nNotes: %s \n",
                new Date(),
                this.id,
                notes
        );

        securityIncidents.add(report);
    }


    /*
     * Logs failed authentication attempts automatically
     */
    public void authIncident() {

        String report = String.format(
                "Datetime Submitted: %s \nID: %s\nNotes: AUTHORIZATION ATTEMPT FAILED FOR THIS USER \n",
                new Date(),
                this.id
        );

        securityIncidents.add(report);
    }


    /*
     * Returns all recorded security incidents
     */
    @Override
    public ArrayList<String> reportSecurityIncidents() {
        return this.securityIncidents;
    }


    /*
     * HIPAA rule:
     * Admin PIN must be at least 6 digits.
     *
     * If valid:
     * - assign PIN
     * - return true
     *
     * Otherwise:
     * - reject PIN
     */
    @Override
    public boolean assignPin(int pin) {

        if (pin >= 100000) {

            // store PIN
            this.pin = pin;

            return true;
        }

        return false;
    }


    /*
     * Authorization check
     *
     * If ID matches → allow access
     * If NOT → log incident
     */
    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {

        if (this.id.equals(confirmedAuthID)) {
            return true;
        } else {
            authIncident();
            return false;
        }
    }


    /*
     * Getters & Setters
     */
    public Integer getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(Integer employeeID) {
        this.employeeID = employeeID;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public ArrayList<String> getSecurityIncidents() {
        return securityIncidents;
    }

    public void setSecurityIncidents(ArrayList<String> securityIncidents) {
        this.securityIncidents = securityIncidents;
    }
}