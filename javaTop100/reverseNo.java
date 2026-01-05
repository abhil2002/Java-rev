import java.util.*;

public class reverseNo{
    public static void main(String args[]){

        int n, rev = 0;
        System.out.println("Enter no to reversse : ");
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();

        while(n!=0){
            rev = rev *10;
            rev = rev%10;
            n =n/10;
        }

        System.out.println("Reverse No : " + rev);
        


    }
}