class Bank{
    int getRateOfInterest(){
        return 0;
    }
    
}
class SBI extends Bank{
    int getRateOfInterest(){
        return 8;
    }
}

public class pr1 {
    public static void main(String[] args){

        Bank s = new SBI();
        System.out.println("SBI Rate Of Interest : "  +  s.getRateOfInterest());

    }
    
}
