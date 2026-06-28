package com.axsos.jafaFun.zoo;

public class Gorilla extends Mammal{

	public Gorilla() {
		// TODO Auto-generated constructor stub
	}
	public void throwSomething() {
		System.out.println("Throwing A Rock Now");
		energy-=5;
		System.out.println("Current Energy is: "+energy);
		
	}
	public void eatingBannan() {
		System.out.println("Eating Tasty Bannana, Gorilla Happy ^_^");
		energy+=10;
		System.out.println("Current Energy is: "+energy);
	}
	public void climb() {
		System.out.println("Gorilla is Climbing a Tree, Gorilla Happy ^_^");
		energy-=10;
		System.out.println("Current Energy is: "+energy);
	}

}
