package Polymorphism;

class mathOp{
    int add(int a, int b){
        return a+b;
    }

    int add(int a, int b, int c){
        return a+b+c;
    }
}
public class methodOverloading {
    public static void main(String[] args){

        mathOp m = new mathOp();

        System.out.println("Addition of 2 no.s : " + m.add(10, 20));
        System.out.println("Addition of 3 no's : " + m.add(10, 20, 30));
    }
    
}
