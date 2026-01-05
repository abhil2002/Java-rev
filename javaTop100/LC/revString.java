package LC;

import java.util.*;

public class revString {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string : ");
        String str = sc.nextLine();

        char[] arr = str.toCharArray();
        int l = 0, r = arr.length - 1;

        while (l < r) {
            char temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;

            l++;
            r--;
        }

        System.out.println("rev string : " + new String(arr));
    }
}
