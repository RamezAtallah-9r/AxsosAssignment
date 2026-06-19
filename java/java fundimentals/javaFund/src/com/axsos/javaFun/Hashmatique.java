package com.axsos.javaFun;
import java.util.Set;
import java.util.HashMap;



public class Hashmatique {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashMap<String,String> band= new HashMap<String, String>();
		band.put("Evolve","Believer");
		band.put("Smoke","Dream");
		band.put("Origins","Natural");
		band.put("Mercury","Wrecked");
		
		System.out.println(band.get("Origins"));
		Set<String> keys = band.keySet();
		for(String key : keys) {
            System.out.print(key+ " -- ");
            System.out.println(band.get(key));    
        }
		System.out.println(keys);
	}

}
