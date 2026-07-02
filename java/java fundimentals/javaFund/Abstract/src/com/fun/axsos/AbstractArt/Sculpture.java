package com.fun.axsos.AbstractArt;

//Sculpture.java
public class Sculpture extends Art {
 private String material; // e.g., Marble, Bronze, Porcelain

 // Constructor
 public Sculpture(String title, String author, String description, String material) {
     // Call the parent (Art) constructor
     super(title, author, description);
     this.material = material;
 }

 // Implementing the abstract method from Art
 @Override
 public void viewArt() {
     System.out.println("=== Sculpture ===");
     System.out.printf("Title: %s\n", this.title);
     System.out.printf("Artist: %s\n", this.author);
     System.out.printf("Material: %s\n", this.material);
     System.out.printf("Description: %s\n\n", this.description);
 }

 // Getter and Setter
 public String getMaterial() { return material; }
 public void setMaterial(String material) { this.material = material; }
}