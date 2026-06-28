# CareSoft Clinic Management System (HIPAA Compliance Module)

## Overview

CareSoft is a clinic management system designed to handle sensitive electronic health information (ePHI).  
This module focuses on implementing **HIPAA compliance rules** for users and administrators to ensure secure access control and proper incident tracking.

The system defines:

- Physicians (medical staff)
- Admin Users (system administrators)
- Base User class
- HIPAA compliance interfaces

---

# System Architecture

## 1. User (Base Class)

### Purpose

The `User` class is the parent class for all system users.  
It stores shared identity and security information.

### Variables

- `Integer id`
  
  - Unique identifier for each user in the system
  - Used for authentication and access validation

- `int pin`
  
  - Security PIN used for login or verification

---

### Methods

#### getId()

- Returns: `Integer`
- Purpose: Retrieves the user ID

---

#### setId(Integer id)

- Parameters:
  - `id`: unique user identifier
- Returns: void
- Purpose: Sets the user ID

---

#### getPin()

- Returns: `int`
- Purpose: Returns the stored PIN

---

#### setPin(int pin)

- Parameters:
  - `pin`: security PIN
- Returns: void
- Purpose: Sets the user PIN (used after validation in subclasses)

---

# 2. HIPAACompliantUser (Interface)

## Purpose

Defines security rules for all system users who handle sensitive data.

---

## Methods

### assignPin(int pin)

- Parameters:
  - `pin`: proposed security PIN
- Returns: `boolean`
- Purpose:
  Validates and assigns a PIN according to role rules:
  - Physician → must be 4 digits
  - Admin → must be 6 or more digits

---

### accessAuthorized(Integer confirmedAuthID)

- Parameters:
  - `confirmedAuthID`: ID used for authentication check
- Returns: `boolean`
- Purpose:
  Checks if the provided ID matches the user ID.
  Grants or denies access.

---

# 3. HIPAACompliantAdmin (Interface)

## Purpose

Defines security audit behavior for administrators.

---

## Methods

### reportSecurityIncidents()

- Parameters: none
- Returns: `ArrayList<String>`
- Purpose:
  Returns a list of all recorded security incidents for auditing.

---

### printSecurityIncidents() (default method)

- Purpose:
  Prints all security incidents to the console.

---

### adminQATest(ArrayList<String> expectedIncidents)

- Parameters:
  - `expectedIncidents`: expected list of logs for testing
- Returns: `boolean`
- Purpose:
  Compares expected incidents with actual logs and prints PASS/FAIL.

---

# 4. Physician Class

## Purpose

Represents a doctor who:

- Accesses patient data
- Writes patient notes
- Validates identity using HIPAA rules

---

## Variables

- `ArrayList<String> patientNotes`
  - Stores all patient medical records created by the physician

---

## Methods

### Constructor Physician(Integer IDcopy)

- Parameters:
  - `IDcopy`: unique physician ID
- Purpose:
  Initializes physician object and assigns ID

---

### assignPin(int pin)

- Parameters:
  - `pin`: proposed 4-digit PIN
- Returns: `boolean`
- Purpose:
  Validates that PIN is exactly 4 digits and stores it if valid

---

### accessAuthorized(Integer confirmedAuthID)

- Parameters:
  - `confirmedAuthID`: ID for authentication
- Returns: `boolean`
- Purpose:
  Checks whether provided ID matches physician ID

---

### newPatientNotes(String notes, String patientName, Date date)

- Parameters:
  - `notes`: medical notes written by physician
  - `patientName`: name of patient
  - `date`: timestamp of record
- Returns: void
- Purpose:
  Creates a formatted medical record and stores it in patientNotes list

---

# 5. AdminUser Class

## Purpose

Represents system administrators responsible for:

- Security monitoring
- Access control logging
- Incident reporting

---

## Variables

- `Integer employeeID`
  
  - Admin unique identifier

- `String role`
  
  - Job role of admin

- `ArrayList<String> securityIncidents`
  
  - Stores all security-related events

---

## Methods

### Constructor AdminUser(Integer id, String role)

- Parameters:
  - `id`: admin identifier
  - `role`: job role
- Purpose:
  Initializes admin data and incident list

---

### assignPin(int pin)

- Parameters:
  - `pin`: proposed PIN
- Returns: `boolean`
- Purpose:
  Validates PIN is 6+ digits and stores it if valid

---

### accessAuthorized(Integer confirmedAuthID)

- Parameters:
  - `confirmedAuthID`: ID used for authentication
- Returns: `boolean`
- Purpose:
  Checks access authorization:
  - If ID matches → allow access
  - If not → log security incident

---

### reportSecurityIncidents()

- Parameters: none
- Returns: `ArrayList<String>`
- Purpose:
  Returns all recorded security incidents

---

### newIncident(String notes)

- Parameters:
  - `notes`: description of incident
- Returns: void
- Purpose:
  Manually logs a security incident

---

### authIncident()

- Parameters: none
- Returns: void
- Purpose:
  Automatically logs failed authentication attempts

---

# System Behavior Summary

## Physicians

- Can store patient notes
- Must validate 4-digit PIN
- Can authenticate access

## Admin Users

- Must validate 6+ digit PIN
- Track all failed access attempts
- Maintain security logs

---

# Key Concept

This system simulates a **HIPAA-compliant access control system**, ensuring:

- Proper authentication
- Role-based security rules
- Audit logging for administrators


