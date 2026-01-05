import java.util.*;

class book{
    int id;
    String name, author, publisher;
    int quant;

    public book(){}

    public book(int ID, String name, String auth, String pub){
        this.id = ID;
        this.name = name;
        this.author = auth;
        this.publisher = pub;
    }

    void display(){
        System.out.println("book ID : " + id);
        System.out.println("book name : " + name);
        System.out.println("Pub : " + publisher);
        System.out.println("auth " + author);

    }
}

public class p2{
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        int choice;
    

    do{
        System.out.println("\n Menu ");
        System.out.println("1. Create book using default Constructor : ");
        System.out.println("2. Create book using parametrised Constructor");
        System.out.println("\n 3. Exit");
        System.out.println(" Enter your choice : ");

        choice =sc.nextInt();

        switch(choice){
            case 1:
                book b1 = new book();
                System.out.println("\n book usinng default constructor :");
                b1.display();
                break;

            case 2:
                System.out.println("Enter book ID :");
                int id = sc.nextInt();

                System.out.println("Enter book name : ");
                String name = sc.nextLine();

                System.out.println("Enter book auth : ");
                String auth = sc.nextLine();

                System.out.println("Enter pub name : ");
                String pub = sc.nextLine();


                book b2 = new book(id, name, auth,pub);
                System.out.println(" book created using parameterised : ");
                b2.display();
                break;

            case 3:
                System.out.println("Exit from program .");
                break;
            
            default:
                System.out.println("Invalid choice ");
            
        }
    }while(choice !=3);
    sc.close();

}
}

