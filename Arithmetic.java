import java.util.Scanner;

public class Arithmetic{
        public static void main(String[] args){
            Scanner input = new Scanner(System.in);

            int x = 0;
            int y = 0;
            int result = 0;

            System.out.print("Enter first number: ");
            x = input.nextInt();

            System.out.print("Enter second number: ");
            y = input.nextInt();

            result = x + y;

            System.out.println(x + " + " + y + " = " + result);

            result = x - y;
            System.out.println(x + " - " + y + " = " + result);

            System.out.println(x + " * " + y + " = " + (x * y));


        }
}