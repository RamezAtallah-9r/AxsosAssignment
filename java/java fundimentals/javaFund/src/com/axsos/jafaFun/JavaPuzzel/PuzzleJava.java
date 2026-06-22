package com.axsos.jafaFun.JavaPuzzel;

import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava {

    Random rand = new Random();

    // 1. 10 random rolls (1–20)
    public ArrayList<Integer> getTenRolls() {

        ArrayList<Integer> rolls = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            rolls.add(rand.nextInt(20) + 1);
        }

        return rolls;
    }

    // 2. random letter
    public char getRandomLetter() {

        String letters = "abcdefghijklmnopqrstuvwxyz";

        return letters.charAt(rand.nextInt(26));
    }

    // 3. password (8 letters)
    public String generatePassword() {

        String password = "";

        for (int i = 0; i < 8; i++) {
            password += getRandomLetter();
        }

        return password;
    }

    // 4. password set
    public ArrayList<String> getNewPasswordSet(int length) {

        ArrayList<String> list = new ArrayList<>();

        for (int i = 0; i < length; i++) {
            list.add(generatePassword());
        }

        return list;
    }

    // BONUS: shuffle array
    public void shuffleArray(int[] arr) {

        for (int i = 0; i < arr.length; i++) {

            int j = rand.nextInt(arr.length);

            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}