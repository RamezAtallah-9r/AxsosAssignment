package com.axsos.jafaFun.Devices;

public class Phone extends Device {

	public Phone() {
		// TODO Auto-generated constructor stub
	}
	public void makeACall() {
		System.out.println("Making a call now");
		battery-=5.00;
		System.out.println("Remaining Battery is:"+battery);
		
	}
	public void playAGame() {
		System.out.println("Playing Pubg Mobile now");
		battery-=20.00;
		System.out.println("Remaining Battery is:"+battery);
		
	}
	public void charging() {
		System.out.println("Charging your Phone now");
		battery+=50.00;
		System.out.println("Current Battery is:"+battery);
		
	}

}
