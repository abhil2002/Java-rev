import java.util.*;

class Book{
    int id;
    String name, author, publisher;
    int quantity;
    
    public Book(){};

    public Book(int ID, String name, String author, String publisher, int quantity){
        this.id = ID;
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.quantity = quantity;
    }

    void display(){
        System.out.println("book ID : " + id);
        System.out.println("book Name : " + name);
        System.out.println("book author : "+author);
        System.out.println("Publisher : " + publisher);
        System.out.println("Quantity : " + quantity);
    }
}

public class Constructor{
    public static void main(String[] argss){

        Scanner sc = new Scanner(System.in);
        int choice;

        do{
            System.out.println("\n  MENU  ");
            System.out.println("1. Create book using Default Constructor");
            System.out.println("2. Create book using Parameterized Constructor");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");

            choice = sc.nextInt();

            switch(choice){
                case 1:
                    Book b1 = new Book();
                    System.out.println("\n Book using Def constructor :");
                    b1.display();
                    break;

                case 2:
                    System.out.println("Enter book ID : " );
                    int id = sc.nextInt();
                    sc.nextLine();
                    

                    System.out.println("Enter book Name : " );
                    String name = sc.nextLine();

                    System.out.println("Enter book author : ");
                    String author = sc.nextLine();

                    System.out.println("Enter Publisher : " );
                    String publisher = sc.nextLine();

                    System.out.println("Enter Quantity : " );
                    int quantity = sc.nextInt();

                    Book b2 = new Book(id, name, author, publisher,quantity);
                    System.out.println("\n book created using Parameterized  Constructor : ");
                    b2.display();
                    break;

                    case 3:
                        System.out.println("Exiting program...");
                    break;

                    default:
                        System.out.println("Invalid choice! Try again.");

            }
        }while(choice!=3);
        sc.close();

        
    }
}

