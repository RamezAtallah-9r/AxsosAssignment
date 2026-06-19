package com.axsos.javaFun.OrdersItems;

import java.util.ArrayList;

public class Orders {
	public String name;
    public double total;
    public boolean ready;
    public ArrayList<Items> items;

    public Orders() {
        this.name = "";
        this.total = 0;
        this.ready = false;
        this.items = new ArrayList<>();
    }
}

