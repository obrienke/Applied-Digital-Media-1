public class Arrays{
  public static void main(String[] args){
    
    int x = 1;
    int y = 2;

    int [] array = {1,2,3};

    System.out.println("lenght: "+array.length);
    System.out.println("First value: "+array[0]);
    System.out.println("Second value: "+array[1]);
    System.out.println("Third value: "+array[2]);
    
    array[0] = 5;
    array[1] = 8;
    array[2] = 9;
    System.out.println("First value: "+array[0]);
    System.out.println("Second value: "+array[1]);
    System.out.println("Third value: "+array[2]);

    int [] a = new int[5];

    for(int i = 0; i < a.length; i++){
        a[i] = 1;
    }

    System.out.println("Index\tValue");
    for(int i = 0; i < a.length; i++){
        a[i] = a[i] * i;
        System.out.println((i)+"\t"+a[i]);
    }

    for(int i = 0; i < a.length; i++){
        //a[i] = a[i] * i;
        System.out.println((i)+"\t"+a[i]);
    }

    String [] names = {"Tom", "John"};
   for(int i = 0; i < names.length; i++){
        //a[i] = a[i] * i;
        System.out.println(names[i]);
    }

    double [] decimalNumbers = {1.234, 123.45};





    

  }
}