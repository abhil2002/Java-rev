import java.util.*;

public class Hashset{
    public static void main(String args[]){
        HashSet<String> hs = new HashSet<String>();
        hs.add("Raj");
        hs.add("raja");

        Iterator<String> itr = hs.iterator();
        while(itr.hasNext()){
            System.out.println(itr.next());
        }

    }
}