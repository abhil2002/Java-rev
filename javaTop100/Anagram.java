import java.util.*;

public class Anagram {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter first string : ");
        String s1 = sc.nextLine();

        System.out.println("enter second string : ");
        String s2 = sc.nextLine();

        if (s1.length() != s2.length()) {
            System.out.println("Not an Anagram. ");
            return;
        }

        int freq[] = new int[26];

        for (int i = 0; i < s1.length(); i++) {
            freq[s1.charAt(i) - 'a']++;
            freq[s2.charAt(i) - 'a']--;
        }

        for (int check : freq) {
            if (check != 0) {
                System.out.println("Not an Anagram.")
                return;
            }
        }
        System.out.println("Anagram.");
    }
}