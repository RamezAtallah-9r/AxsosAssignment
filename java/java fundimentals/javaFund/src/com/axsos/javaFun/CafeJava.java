package com.axsos.javaFun;

import java.nio.channels.SelectableChannel;
import java.util.Scanner;


public class CafeJava {

	public static void main(String[] args) {
        // Create scanner for console input
        Scanner input = new Scanner(System.in);

        // APP STRINGS
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // 1. DYNAMIC DRINK PRICES (Scanner Input)
        System.out.println("=== SETUP: ENTER MENU PRICES ===");
        System.out.print("Enter price for Mocha: $");
        double mochaPrice = input.nextDouble();
        
        System.out.print("Enter price for Drip Coffee: $");
        double dripCoffeePrice = input.nextDouble();
        
        System.out.print("Enter price for Latte: $");
        double lattePrice = input.nextDouble();
        
        System.out.print("Enter price for Cappuccino: $");
        double cappuccinoPrice = input.nextDouble();
        
        // 2. DEFINE CUSTOMER NAMES
        String customer1 = "Shatha";
        String customer2 = "Ahmad";
        String customer3 = "Sali";
        String customer4 = "Adam";
        
        // 3. DYNAMIC ORDER STATUS FLAGS (Scanner Input)
        System.out.println("\n=== SETUP: ENTER ORDER STATUSES (true/false) ===");
        
        System.out.print("Is Shatha's order ready? ");
        boolean isReadyOrder1 = input.nextBoolean();
        
        System.out.print("Is Ahmad's order ready? ");
        boolean isReadyAhmad = input.nextBoolean();
        
        System.out.print("Is Sali's order ready? ");
        boolean isReadySali = input.nextBoolean();
        
        System.out.print("Is Adam's order ready? ");
        boolean isReadyAdam = input.nextBoolean();
        System.out.println("\n============================================\n");

        // --- APP INTERACTION SIMULATION SIMULATION ---
        
        // Example: Shatha
        System.out.println(generalGreeting + customer1);
        if (isReadyOrder1) {
            System.out.println(customer1 + readyMessage);
        } else {
            System.out.println(customer1 + pendingMessage);
        }
        System.out.println("--------------------------------------------");

        // Task 4: Sali ordered a coffee status message
        System.out.println(generalGreeting + customer3);
        if (isReadySali) {
            System.out.println(customer3 + readyMessage);
        } else {
            System.out.println(customer3 + pendingMessage);
        }
        System.out.println("--------------------------------------------");

        // Task 5: Ahmad ordered a cappuccino
        System.out.println(generalGreeting + customer2);
        if (isReadyAhmad) {
            System.out.println(customer2 + readyMessage);
            System.out.println(displayTotalMessage + cappuccinoPrice);
        } else {
            System.out.println(customer2 + pendingMessage);
        }
        System.out.println("--------------------------------------------");

        // Task 6: Sali ordered 2 lattes total + conditional check
        System.out.println(generalGreeting + customer3);
        double saliTotal = lattePrice * 2;
        System.out.println(displayTotalMessage + saliTotal);
        if (isReadySali) {
            System.out.println(customer3 + readyMessage);
        } else {
            System.out.println(customer3 + pendingMessage);
        }
        System.out.println("--------------------------------------------");

        // Task 7: Adam difference calculations (Latte price - Drip Coffee price)
        System.out.println(generalGreeting + customer4);
        double adamDifference = lattePrice - dripCoffeePrice;
        System.out.println("Adjustment: You were charged for Drip Coffee but ordered a Latte.");
        System.out.println(displayTotalMessage + adamDifference + " to pay the difference.");
        System.out.println("--------------------------------------------");

        // Close scanner resource
        input.close();

	}

}
