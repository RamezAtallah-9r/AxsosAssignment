package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

/*
 * Physician represents a doctor in the clinic system.
 *
 * Extends:
 * User → inherits id and pin
 *
 * Implements:
 * HIPAACompliantUser → must implement:
 * - assignPin()
 * - accessAuthorized()
 */
public class Physician extends User implements HIPAACompliantUser {

    /*
     * Stores all patient notes created by this physician.
     *
     * Each note contains:
     * - submission date
     * - physician ID
     * - patient name
     * - physician notes
     */
    private ArrayList<String> patientNotes;

    
    /*
     * Constructor
     *
     * Receives physician ID.
     *
     * Calls parent constructor (User)
     * and initializes patient notes storage.
     */
    public Physician(Integer IDcopy) {
        super(IDcopy);

        // Create empty list for storing notes
        this.patientNotes = new ArrayList<>();
    }


    /*
     * Creates and stores a formatted patient report.
     *
     * Parameters:
     * notes → physician observations
     * patientName → patient full name
     * date → submission date
     */
    public void newPatientNotes(String notes, String patientName, Date date) {

        String report =
                String.format("Datetime Submitted: %s \n", date);

        report +=
                String.format("Reported By ID: %s\n", this.id);

        report +=
                String.format("Patient Name: %s\n", patientName);

        report +=
                String.format("Notes: %s \n", notes);

        // Store report
        this.patientNotes.add(report);
    }


    /*
     * HIPAA requirement:
     * PIN must be exactly 4 digits.
     *
     * If valid:
     * - assign PIN
     * - return true
     *
     * Otherwise:
     * - return false
     */
    @Override
    public boolean assignPin(int pin) {

        if (pin >= 1000 && pin <= 9999) {

            // Save PIN into inherited variable
            this.pin = pin;

            return true;
        }

        return false;
    }


    /*
     * HIPAA authorization check
     *
     * Compares physician ID
     * with supplied authorization ID.
     *
     * Returns:
     * true → access granted
     * false → access denied
     */
    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {

        return this.id.equals(confirmedAuthID);
    }


    /*
     * Returns physician notes
     */
    public ArrayList<String> getPatientNotes() {
        return patientNotes;
    }


    /*
     * Replaces notes list
     */
    public void setPatientNotes(ArrayList<String> patientNotes) {
        this.patientNotes = patientNotes;
    }
}