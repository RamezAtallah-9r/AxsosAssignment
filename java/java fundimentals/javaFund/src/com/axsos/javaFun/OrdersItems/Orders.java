package com.axsos.javaFun.OrdersItems;

import java.util.ArrayList;

public class Orders {
    private String name;
    private double total;
    private boolean ready;
    private ArrayList<Items> items;

    // Default constructor
    public Orders() {
        this.name = "Guest";
        this.total = 0.0;
        this.ready = false;
        this.items = new ArrayList<>();
    }

    // Overloaded constructor
    public Orders(String name) {
        this.name = name;
        this.total = 0.0;
        this.ready = false;
        this.items = new ArrayList<>();
    }

    // Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setReady(boolean ready) {
        this.ready = ready;
    }

    // Getters
    public String getName() {
        return this.name;
    }

    public boolean getReady() {
        return this.ready;
    }

    public ArrayList<Items> getItems() {
        return this.items;
    }

    // addItem
    public void addItem(Items item) {
        this.items.add(item);
        this.total += item.getPrice();
    }

    // getStatusMessage
    public String getStatusMessage() {
        if (this.ready) {
            return "Your order is ready.";
        }
        return "Thank you for waiting. Your order will be ready soon.";
    }

    // getOrderTotal
    public double getOrderTotal() {
        return this.total;
    }

    // display
    public void displayOrder() {
        System.out.println("Customer Name: " + this.name);

        for (Items item : items) {
            System.out.println(
                item.getName() + " - $" + item.getPrice()
            );
        }

        System.out.println("Total: $" + this.total);
        System.out.println("---------------------");
    }
}