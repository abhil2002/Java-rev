class Bank1{
    void show(){
        System.out.println("this is a bank");
    }
}

class SBI1 extends Bank1{

}

public class Inheritance{
    public static void main(String[] args){
        SBI1 s = new SBI1();
        s.show();
    }
    
}
