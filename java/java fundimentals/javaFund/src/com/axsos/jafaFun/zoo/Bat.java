package com.axsos.jafaFun.zoo;

public class Bat extends Mammal {

	public Bat() {
		// TODO Auto-generated constructor stub
		energy=300;
	}
	public void fly() {
		System.out.println("Bat is Flying ");
		energy-=50;
		System.out.println("Current Energy is: "+energy);
		
	}
	public void eatingHumans() {
		System.out.println("Eating Tasty Humans, Bat is Happy ^_^");
		energy+=25;
		System.out.println("Current Energy is: "+energy);
	}
	public void attackTown() {
		System.out.println("Bat is Atacking the Town, Bat is Angrie -_-");
		energy-=100;
		System.out.println("Current Energy is: "+energy);
	}

}
