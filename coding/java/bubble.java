import java.util.*;

class bubble{
    public static void printArray(int arr[]){
        for(int i=0; i<arr.length; i++){
            System.out.print(arr[i]+" ");
        }
    System.out.println();
    }

    public static void main(String args[]){
        int arr[] = {5,7,3,67,89,56};


        //bubble sorting
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr.length-1; j++){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;

                }


            }
        }
     printArray(arr);
    }

}
