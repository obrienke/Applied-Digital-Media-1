public class Test{
    public static void main(String[] args){
        int i = 1;
        int j = 1;
        while(i <= 5){
            while(j <= 5){
                System.out.print("* ");
                j++;
            }
            System.out.println();
            j = 1;
            i++;
        }
        System.out.println("* ");
    }
}