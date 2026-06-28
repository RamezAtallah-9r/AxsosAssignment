package com.axsos.jafaFun.Devices;

public class Device {
	Double battery;

	public Device() {
		// TODO Auto-generated constructor stub
		this.battery=100.00;
	}
	public void displayBattery() {
		System.out.println("Remaning Battery is: "+battery);
	}

}
