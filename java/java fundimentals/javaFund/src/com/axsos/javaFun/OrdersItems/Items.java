package com.axsos.javaFun.OrdersItems;

public class Items {
    private String name;
    private Double price;

    public Items(String name, Double price) {
        this.name = name;
        this.price = price;
    }

    // Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    // Getters
    public String getName() {
        return this.name;
    }

    public Double getPrice() {
        return this.price;
    }
}