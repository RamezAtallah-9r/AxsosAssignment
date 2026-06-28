package com.axsos.jafaFun.Devices;

public class TestDevices {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Phone iPhone=new Phone();
		System.out.println("--------------------");
		iPhone.makeACall();
		System.out.println("");
		iPhone.makeACall();
		System.out.println("");
		iPhone.makeACall();
		
		System.out.println("--------------------");
		iPhone.playAGame();
		System.out.println("");
		iPhone.playAGame();
		
		System.out.println("--------------------");
		iPhone.charging();
		
		System.out.println("--------------------");
		iPhone.displayBattery();
	}

}
