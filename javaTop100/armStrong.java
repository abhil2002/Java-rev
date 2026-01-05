import java.util.*;

public class armStrong{
    public static void main(String args[]){
       
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a no : ");
        int n = sc.nextInt();

        int temp = n;
        int res = 0;

        int len = String.valueOf(n).length();

        while(temp>0){
            int lastD = n%10;
            res += Math.pow(lastD,len);
            temp /= 10;  
        }

        if(res == n){
            System.out.println(n + " is an Armstrong no. ");
        }else{
            System.out.println(n +  " is not an Armstrong no. ");

        }

        sc.close();

    }
    
}
