package com.axsos.javaFun.OrdersItems;

public class TestClass {

	 public static void main(String[] args) {

	        // Menu items
	        Items item1 = new Items("mocha", 3.50);
	        Items item2 = new Items("latte", 4.50);
	        Items item3 = new Items("drip coffee", 5.50);
	        Items item4 = new Items("cappuccino", 6.50);

	        // Orders
	        Orders order1 = new Orders();
	        Orders order2 = new Orders();
	        Orders order3 = new Orders();
	        Orders order4 = new Orders();

	        // Customer names
	        order1.name = "Rami";
	        order2.name = "Jimmy";
	        order3.name = "Noah";
	        order4.name = "Sam";

	        // Print order1
	        System.out.println(order1);

	        // Print total prediction
	        System.out.println(order1.total);

	        // Jimmy ordered mocha
	        order2.items.add(item1);
	        order2.total += item1.price;

	        // Noah ordered cappuccino
	        order3.items.add(item4);
	        order3.total += item4.price;

	        // Sam added latte
	        order4.items.add(item2);
	        order4.total += item2.price;

	        // Rami order ready
	        order1.ready = true;

	        // Sam ordered 2 more lattes
	        order4.items.add(item2);
	        order4.items.add(item2);
	        order4.total += item2.price * 2;

	        // Jimmy ready
	        order2.ready = true;

	        // Output
	        System.out.println("\n===== Orders =====");

	        System.out.printf(
	            "Name: %s\nTotal: %.2f\nReady: %b\n\n",
	            order1.name, order1.total, order1.ready
	        );

	        System.out.printf(
	            "Name: %s\nTotal: %.2f\nReady: %b\n\n",
	            order2.name, order2.total, order2.ready
	        );

	        System.out.printf(
	            "Name: %s\nTotal: %.2f\nReady: %b\n\n",
	            order3.name, order3.total, order3.ready
	        );

	        System.out.printf(
	            "Name: %s\nTotal: %.2f\nReady: %b\n",
	            order4.name, order4.total, order4.ready
	        );
	    }

}
