package com.axsos.jafaFun.ListsofExceptions;

import java.util.ArrayList;

public class ListsofExceptions {

    public static void main(String[] args) {

        ArrayList<Object> myList = new ArrayList<>();

        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");

        for (int i = 0; i < myList.size(); i++) {

            try {
                Integer value = (Integer) myList.get(i);
                System.out.println("Index " + i + " = " + value);
            }
            catch (Exception e) {
                System.out.println("Error at index " + i);
                System.out.println("Value: " + myList.get(i));
                System.out.println("Error: " + e);
                System.out.println("-------------------");
            }
        }
    }
}
