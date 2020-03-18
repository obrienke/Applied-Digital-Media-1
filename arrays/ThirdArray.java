public class ThirdArray{
  public static void main(String[] args){
    int[] x = new int[5];

    /* each element now holds a value of zero
       update each element, with its index value + 1 */
    for(int i = 0; i < x.length; i++){
	  x[i] = i+1;
	}

    System.out.println("Index\tValue\n");

    for(int i = 0; i < x.length; i++){
      System.out.println(i+"\t"+x[i]);
    }
    System.out.println();
  }
}