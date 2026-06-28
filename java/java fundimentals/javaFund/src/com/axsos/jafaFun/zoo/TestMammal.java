package com.axsos.jafaFun.zoo;

public class TestMammal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Mammal animal=new Mammal();
		animal.displayEnergy();
		
		System.out.println("----------Max the Gorlla----------");
		Gorilla maxGorilla=new Gorilla();
		maxGorilla.displayEnergy();
		System.out.println("");
		maxGorilla.throwSomething();
		maxGorilla.throwSomething();
		maxGorilla.throwSomething();
		System.out.println("");
		maxGorilla.eatingBannan();
		maxGorilla.eatingBannan();
		System.out.println("");
		maxGorilla.climb();
		
		System.out.println("----------Bruce the Bat----------");
		Bat bruce=new Bat();
		bruce.displayEnergy();
		System.out.println("");
		
		bruce.fly();
		bruce.fly();
		System.out.println("");
		
		bruce.attackTown();
		bruce.eatingHumans();
		System.out.println("");
		
		bruce.attackTown();
		bruce.eatingHumans();
		System.out.println("");
		
		bruce.attackTown();
		bruce.eatingHumans();
		System.out.println("");
	}

}
