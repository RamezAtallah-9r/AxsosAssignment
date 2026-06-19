package com.axsos.javaFun;
import java.util.Scanner;

public class firstJavaProplem {

	public static void main(String[] args) {
		 Scanner input = new Scanner(System.in); 
		 
		 System.out.print("Enter your name: ");
		 String name = input.nextLine(); 

		 System.out.print("Enter your age: ");
	        int age = input.nextInt(); 
	        input.nextLine();
	        
	        System.out.print("Enter your location: ");
			String location = input.nextLine();
			
			System.out.println("My name is: "+ name);
			System.out.println("My age is: "+ age);
			System.out.println("My location is: "+ location);
	        
		input.close(); 
	}

}
