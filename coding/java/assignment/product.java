import java.util.Scanner;
public class product{
    public static void main(String[] args){
        int x,y,z;
        System.out.println("enter the value of the x and y");
        Scanner sc = new Scanner(System.in);
        x=sc.nextInt();
        y=sc.nextInt();
        z=x*y;
        System.out.println("product of the " + x + " and " + y + " = " +z);

    }
}