import java.util.*;

class Account{
    private int balance = 1000;
    
    public int getBalance(){
        return balance;
    }

    public void deposit(int amount){
        balance +=amount;
    }
}

public class encapsulation{
    public static void main(String[] args){
        Account acc = new Account();
        acc.deposit(500);
        System.out.println(acc.getBalance());
    }
}