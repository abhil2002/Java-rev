import java.util.*;

public class arrayList {
    public static void main(String[] args){
        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("apple");
        fruits.add("Banana");
        fruits.add("Orange");

        System.out.println("Fruits : "+fruits);

        System.out.println("fruits 1 : "+fruits.get(0));
        fruits.remove("Banana");
        System.out.println("After removing : "+ fruits);
        System.out.println("No of fruits : "+ fruits.size());

        Iterator<String> it = fruits.iterator();
        while(it.hasNext()){
            String name =it.next();
            System.out.println(name);

        }

    }
    
}
