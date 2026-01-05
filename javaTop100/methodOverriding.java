import java.util.*;

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
class ICICI extends Bank{
    int getRateOfInterest(){
        return 9;
    }
}

class AXIS extends Bank{
    int getRateOfInterest(){
        return 9;
    }
}

public class methodOverriding{
    public static void main(String[] args){
        SBI s = new SBI();
        ICICI ic = new ICICI();
        AXIS ax = new AXIS();

        System.out.println("SBI rate of Interest : "+ s.getRateOfInterest());
        System.out.println("ICICI Rate of Interest :"+ic.getRateOfInterest());
        System.out.println("Axis Rate of Interest : " + ax.getRateOfInterest());

    }
}

