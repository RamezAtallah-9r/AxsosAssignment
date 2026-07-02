package com.axsos.javafun.calculater;

import java.io.Serializable;

public class Calculator implements Serializable {
    // JavaBeans require private properties and a no-arg constructor
    private double operandOne;
    private double operandTwo;
    private String operation;
    private double result;

    // Default Constructor
    public Calculator() {
    }

    // Executes the operation based on the set operation string
    public void performOperation() {
        if (this.operation == null) {
            System.out.println("Error: No operation specified.");
            return;
        }

        if (this.operation.equals("+")) {
            this.result = this.operandOne + this.operandTwo;
        } else if (this.operation.equals("-")) {
            this.result = this.operandOne - this.operandTwo;
        } else {
            System.out.println("Error: Invalid operation. Only '+' and '-' are supported.");
        }
    }

    // Getters and Setters
    public double getOperandOne() {
        return operandOne;
    }

    public void setOperandOne(double operandOne) {
        this.operandOne = operandOne;
    }

    public double getOperandTwo() {
        return operandTwo;
    }

    public void setOperandTwo(double operandTwo) {
        this.operandTwo = operandTwo;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public double getResult() {
        return result;
    }

}
