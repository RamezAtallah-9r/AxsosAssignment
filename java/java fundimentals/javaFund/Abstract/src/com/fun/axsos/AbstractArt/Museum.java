package com.fun.axsos.AbstractArt;

//Museum.java
import java.util.ArrayList;
import java.util.Collections;

public class Museum {
 public static void main(String[] args) {
     // Create 3 Paintings
     Painting paint1 = new Painting("The Starry Night", "Vincent van Gogh", "A depiction of the view from the eastward-facing window of his asylum room.", "Oil");
     Painting paint2 = new Painting("The Scream", "Edvard Munch", "An expressionist masterpiece showing a figure against an orange sky.", "Tempera and Pastel");
     Painting paint3 = new Painting("Water Lilies", "Claude Monet", "Part of a series depicting the artist's flower garden at Giverny.", "Oil");

     // Create 2 Sculptures
     Sculpture sculp1 = new Sculpture("The Thinker", "Auguste Rodin", "A bronze sculpture representing a man in sober meditation.", "Bronze");
     Sculpture sculp2 = new Sculpture("David", "Michelangelo", "A Renaissance masterpiece depicting the biblical hero.", "Marble");

     // NINJA BONUS 1: Store them inside an ArrayList of type Art
     ArrayList<Art> museum = new ArrayList<Art>();
     museum.add(paint1);
     museum.add(paint2);
     museum.add(paint3);
     museum.add(sculp1);
     museum.add(sculp2);

     // NINJA BONUS 2: Shuffle the collection
     System.out.println("Shuffling the museum gallery contents...\n");
     Collections.shuffle(museum);

     // Print the details of each artwork polymorphically
     for (Art artwork : museum) {
         artwork.viewArt();
     }
 }
}
