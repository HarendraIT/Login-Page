import java.util.Scanner;
public class factorial{
    public static void main(String[] args){
        int n;
        System.out.println("enter factorial number");
        Scanner sc = new Scanner(System.in);
        n=sc.nextInt();
        int ans=1;
        while(n>0){
            ans=ans*n;
            n--;
            
        }
        System.out.println(ans);
    }
}