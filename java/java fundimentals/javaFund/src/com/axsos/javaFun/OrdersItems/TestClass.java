package com.axsos.javaFun.OrdersItems;

public class TestClass {

	public static void main(String[] args) {

        // Create items
        Items mocha = new Items("Mocha", 4.50);
        Items latte = new Items("Latte", 5.00);
        Items cappuccino = new Items("Cappuccino", 5.50);
        Items espresso = new Items("Espresso", 3.00);
        Items muffin = new Items("Muffin", 2.50);

        // Two guest orders
        Orders order1 = new Orders();
        Orders order2 = new Orders();

        // Three named orders
        Orders order3 = new Orders("Sam");
        Orders order4 = new Orders("John");
        Orders order5 = new Orders("Emily");

        // Add at least 2 items per order
        order1.addItem(mocha);
        order1.addItem(muffin);

        order2.addItem(latte);
        order2.addItem(espresso);

        order3.addItem(cappuccino);
        order3.addItem(muffin);

        order4.addItem(mocha);
        order4.addItem(espresso);

        order5.addItem(latte);
        order5.addItem(cappuccino);

        // Mark some orders ready
        order2.setReady(true);
        order4.setReady(true);

        // Test getStatusMessage()
        System.out.println(order1.getStatusMessage());
        System.out.println(order2.getStatusMessage());
        System.out.println(order3.getStatusMessage());
        System.out.println(order4.getStatusMessage());
        System.out.println(order5.getStatusMessage());

        System.out.println();

        // Test getOrderTotal()
        System.out.println(order1.getOrderTotal());
        System.out.println(order2.getOrderTotal());
        System.out.println(order3.getOrderTotal());
        System.out.println(order4.getOrderTotal());
        System.out.println(order5.getOrderTotal());

        System.out.println();

        // Display orders
        order1.displayOrder();
        order2.displayOrder();
        order3.displayOrder();
        order4.displayOrder();
        order5.displayOrder();
    }

}
