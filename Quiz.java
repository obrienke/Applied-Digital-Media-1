//uncomment next line if program requires input
import java.util.Scanner;

public class Quiz{
        public static void main(String[] args){
            //uncomment next line if program requires input
            Scanner input = new Scanner(System.in);
            int answer = 0;
            String ans = "";
            int score = 0;

            System.out.println("Question 1");
            System.out.println();
            System.out.println("The following code produces which output?");
            System.out.println();
            System.out.println("int x  = 65");
            System.out.println("if(x > 65){");
            System.out.println("  System.out.println(x);");
            System.out.println("}");
            System.out.println();
            System.out.println("Select one of the following:");
            System.out.println();
            System.out.println("1. 65");
            System.out.println("2. nothing is printed to the screen");
            System.out.println();
            System.out.print("Enter answer (1 or 2): ");
            answer = input.nextInt();
            System.out.println();

            if(answer == 1 || answer == 3 || answer == 4 ){
                System.out.println("Incorrect");
            }else if(answer == 2){
                System.out.println("Correct");
                score++;
            }else{
                System.out.println("Invalid");
            }

            /*switch(answer){
                case 1: 
                    System.out.println("Incorrect");
                    break;
                case 2:
                    System.out.println("Correct");
                    break;
                default:
                    System.out.println("Invalid answer");
            }*/

            System.out.println("Question 2");
            System.out.println();
            System.out.println("String num = \"2\" + \"2\"");
            System.out.println();
            System.out.println("What is the value assigned to num");          
            System.out.println();
            System.out.println("Type in your answer:");
            ans = input.next();

 
            System.out.println();

            if(ans.equals("22")){
                System.out.println("Correct");
                score++;
            }else{
                System.out.println("InCorrect");
            }

            System.out.println("Result is :"+((score*100)/2)+"%");
           
        }
}