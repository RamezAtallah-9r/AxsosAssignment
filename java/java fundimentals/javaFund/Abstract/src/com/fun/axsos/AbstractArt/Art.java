package com.fun.axsos.AbstractArt;

//Art.java
public abstract class Art {
 protected String title;
 protected String author;
 protected String description;

 // Constructor
 public Art(String title, String author, String description) {
     this.title = title;
     this.author = author;
     this.description = description;
 }

 // Abstract Method (to be implemented by subclasses)
 public abstract void viewArt();

 // Getters and Setters
 public String getTitle() { return title; }
 public void setTitle(String title) { this.title = title; }

 public String getAuthor() { return author; }
 public void setAuthor(String author) { this.author = author; }

 public String getDescription() { return description; }
 public void setDescription(String description) { this.description = description; }
}
