package com.axsos.javafun.calculater;

public class test {

	public static void main(String[] args) {
        // Instantiate the Calculator Bean
        Calculator calc = new Calculator();

        // Run client's test case
        calc.setOperandOne(10.5);
        calc.setOperation("+");
        calc.setOperandTwo(5.2);
        
        // Execute and fetch results
        calc.performOperation();
        System.out.println("Result: " + calc.getResult()); // Output: 15.7
        
        // Quick check for subtraction as well
        calc.setOperandOne(20.0);
        calc.setOperation("-");
        calc.setOperandTwo(4.5);
        
        calc.performOperation();
        System.out.println("Subtraction Result: " + calc.getResult()); // Output: 15.5
    }

}
