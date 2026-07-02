package com.fun.axsos.AbstractArt;

//Painting.java
public class Painting extends Art {
 private String paintType; // e.g., Oil, Watercolor, Acrylic

 // Constructor
 public Painting(String title, String author, String description, String paintType) {
     // Call the parent (Art) constructor
     super(title, author, description);
     this.paintType = paintType;
 }

 // Implementing the abstract method from Art
 @Override
 public void viewArt() {
     System.out.println("=== Painting ===");
     System.out.printf("Title: %s\n", this.title);
     System.out.printf("Artist: %s\n", this.author);
     System.out.printf("Medium: %s\n", this.paintType);
     System.out.printf("Description: %s\n\n", this.description);
 }

 // Getter and Setter
 public String getPaintType() { return paintType; }
 public void setPaintType(String paintType) { this.paintType = paintType; }
}
