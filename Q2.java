//uncomment next line if program requires input
import java.util.Scanner;

public class Q2{
        public static void main(String[] args){
            //uncomment next line if program requires input
            Scanner input = new Scanner(System.in);
            String answer = "";

            System.out.println("Question 2");
            System.out.println();
            System.out.println("String num = \"2\" + \"2\"");
            System.out.println();
            System.out.println("What is the value assigned to num");          
            System.out.println();
            System.out.println("Type in your answer:");
            answer = input.next();

 
            System.out.println();

            if(answer.equals("22")){
                System.out.println("Correct");
            }else{
                System.out.println("InCorrect");
            }
        }
}