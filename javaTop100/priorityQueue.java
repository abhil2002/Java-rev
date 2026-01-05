import java.util.*;

public class priorityQueue {
    public static void main(String args[]){
        PriorityQueue<String> pq = new PriorityQueue<String>();
        pq.add("Rajendra");
        pq.add("Mahesh");
        pq.add("Tech");

        System.out.println("head" + pq.element());
        System.out.println("head" + pq.peek());
        System.out.println("Iterating queue elements: ");

        Iterator itr = pq.iterator();
        while(itr.hasNext()){
            System.out.println(itr.next());
        }

        pq.remove();
        pq.poll();
        System.out.println("After removing : ");

        Iterator<String> itr2 = pq.iterator();
        while(itr2.hasNext()){
            System.out.println(itr2.next());
        }

    }
    
}
