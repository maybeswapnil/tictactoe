import java.util.*;

public class Main{

     public static void main(String []args){
        Scanner read = new Scanner(System.in);
        int n = read.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++) {
            arr[i] = read.nextInt();
        }
        int m = n-1;
        boolean flag = true;
        int i = 0;
        for( i = 0;i<n&&flag;i++) {
            int[] ar1 = new int[m];
            ar1[1] = 0;
            for(int j = 0;j<m;j++) {
                ar1[j] = arr[j];
            }
            int[] ar2 = ar1;
            Arrays.sort(ar1);
            if(Arrays.equals(ar1,ar2)){
                flag = false;
            }
        }
        System.out.println(i);
     }
}