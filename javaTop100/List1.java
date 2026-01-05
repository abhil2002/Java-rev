import java.util.*;

class Book {
    int id, quantity;
    String name, author, publisher;

    public Book() {
    }

    public Book(int id, String name, String author, String publisher, int quantity) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.quantity = quantity;
    }
}

public class List1{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        List<Book> list = new ArrayList<>();

        System.out.print("How many books you want to enteer ? ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 1; i <= n; i++) {
            System.out.println("\nEnter details of Book " + i);

            System.out.print("Enter ID: ");
            int id = sc.nextInt();
            sc.nextLine();

            System.out.print("Enter Name: ");
            String name = sc.nextLine();

            System.out.print("Enter Author: ");
            String author = sc.nextLine();

            System.out.print("Enter Publisher: ");
            String publisher = sc.nextLine();

            System.out.print("Enter Quantity: ");
            int quantity = sc.nextInt();
            sc.nextLine();

            Book b = new Book(id, name, author, publisher, quantity);
            list.add(b);

        }

        System.out.println("\n Display list content/books : ");
        for (Book b : list) {
            System.out.println(b.id + " " + b.name + " ");
        }

        ListIterator<Book> itr = list.listIterator();
        System.out.println("\n Traversong list using List Iterator : ");
        while (itr.hasNext()) {
            Book bk = itr.next();
            System.out.println(bk.quantity + " " + bk.publisher);
        }
        sc.close();

    }
}
