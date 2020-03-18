//create an array which will hold 8 values.
//prompt the user to enter the 8 values to store in the array.
//print out the contents of the array in a table and display the average value

import java.util.Scanner;

public class FifthArray{
  public static void main(String[] args){
    int[] x = new int[8];
    double total = 0;
    int index = -1;
    Scanner input = new Scanner(System.in);

    for(int i = 1; i <= x.length; i++){
	  System.out.print("Enter value for element "+i+": ");
	  x[++index] = input.nextInt();
	  total += x[index];
	}
    System.out.println();
    System.out.println("Index\tValue");
    System.out.println("-----\t-----");
    for(int i = 0; i < x.length; i++){
      System.out.println(i+"\t"+x[i]);
    }
    System.out.println();
    System.out.println("Average of array values is: "+(total/x.length));
    System.out.println();
  }
}