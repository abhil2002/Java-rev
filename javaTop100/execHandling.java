import java.util.*;
public class execHandling {
    public static void main(String[] args){

        int a, b, res;

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two inputs : ");
        a =sc.nextInt();
        b = sc.nextInt();

        try{
            res = a/b;
            System.out.println("Result = " + res);
        }
        catch(ArithmeticException e){
            System.out.println("Exception caught : Division by zero. ");
        }
    }
    
}
