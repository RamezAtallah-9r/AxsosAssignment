package com.axsos.javaFun.JavaCafe;

import java.util.ArrayList;
import java.util.Scanner;

public class CafeUtil {

    private Scanner scanner = new Scanner(System.in);

    // 1. Streak Goal
    public int getStreakGoal() {

        int total = 0;

        for (int i = 1; i <= 10; i++) {
            total += i;
        }

        return total;
    }

    // 2. Order Total
    public double getOrderTotal(double[] prices) {

        double total = 0;

        for (double price : prices) {
            total += price;
        }

        return total;
    }

    // 3. Display Menu
    public void displayMenu(ArrayList<String> menuItems) {

        for (int i = 0; i < menuItems.size(); i++) {
            System.out.println(i + " " + menuItems.get(i));
        }
    }

    // 4. Add Customer
    public void addCustomer(ArrayList<String> customers) {

        System.out.println("Enter your name please");

        String username = scanner.nextLine();

        System.out.println("Hello, " + username + "!");

        System.out.println(
                "There are "
                        + customers.size()
                        + " people in front of you"
        );

        customers.add(username);

        System.out.println(customers);
    }

    // BONUS: Print Price Chart
    public void printPriceChart(String product, double price, int maxQuantity) {

        System.out.println("\n" + product);

        for (int i = 1; i <= maxQuantity; i++) {

            double total = (price * i) - (0.5 * (i - 1));

            System.out.printf("%d - $%.2f\n", i, total);
        }
    }
}