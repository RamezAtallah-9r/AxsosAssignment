package com.axsos.javaFun.JavaCafe;

import java.util.ArrayList;

public class TestCafe {

    public static void main(String[] args) {

    	CafeUtil appTest = new CafeUtil();

        // ======================
        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf(
                "Purchases needed by week 10: %d\n\n",
                appTest.getStreakGoal()
        );

        // ======================
        System.out.println("----- Order Total Test -----");

        double[] lineItems = {3.5, 1.5, 4.0, 4.5};

        System.out.println(
                "Order total: " +
                        appTest.getOrderTotal(lineItems)
        );

        // ======================
        System.out.println("\n----- Display Menu Test -----");

        ArrayList<String> menu = new ArrayList<>();
        menu.add("drip coffee");
        menu.add("cappuccino");
        menu.add("latte");
        menu.add("mocha");

        appTest.displayMenu(menu);

        // ======================
        System.out.println("\n----- Add Customer Test -----");

        ArrayList<String> customers = new ArrayList<>();

        for (int i = 0; i < 2; i++) {
            appTest.addCustomer(customers);
            System.out.println();
        }

        // ======================
        System.out.println("\n----- Price Chart -----");

        appTest.printPriceChart(
                "Colombian Coffee Grounds",
                15.00,
                4
        );
    }
}