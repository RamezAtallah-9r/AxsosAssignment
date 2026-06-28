package com.axsos.jafaFun.zoo;

public class Mammal {
	public int energy;

	public Mammal() {
		// TODO Auto-generated constructor stub
		energy=100;
	}
	public int displayEnergy() {
		System.out.println("current Energy is:"+energy);
		return energy;
	}
}
