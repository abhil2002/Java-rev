import java.util.*;
public class unique {
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string : ");
        String s = sc.nextLine();

        int[] freq = new int[26];

        for(char c: s.toCharArray()){
            freq[c-'a']++;
        }

        int index = -1;
        for(int i =0; i<s.length(); i++){
            if(freq[s.charAt(i) -'a'] ==1){
                index = i;
                break;

            }
        }

    }
    
}
