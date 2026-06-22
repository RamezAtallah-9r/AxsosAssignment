package com.axsos.jafaFun.JavaPuzzel;

import java.util.ArrayList;

public class TestPuzzleJava {

    public static void main(String[] args) {

        PuzzleJava p = new PuzzleJava();

        System.out.println(p.getTenRolls());

        System.out.println(p.getRandomLetter());

        System.out.println(p.generatePassword());

        System.out.println(p.getNewPasswordSet(3));

        int[] arr = {1,2,3,4,5};
        p.shuffleArray(arr);

        for (int x : arr) {
            System.out.print(x + " ");
        }
    }
}