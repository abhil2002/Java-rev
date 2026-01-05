public class array {
    public static void main(String args[]){
        int a[] = new int[5];
        a[0] = 10;
        a[1] = 20;

        for(int i =0; i<a.length;i++){
            System.out.println(a[i]);
        }

        int arr[][] = {{1,2,3}, {2,4,5}};

        for(int i =0; i <arr.length; i++){
            for(int j =0; j<arr[0].length; j++){
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }
    }
    
}
