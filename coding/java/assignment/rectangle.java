import java.util.Scanner;
public class rectangle{
    public static void main(String[] args){
        float length,breadth,area;
        System.out.println("enter the value of the length and breadth");
        Scanner sc = new Scanner(System.in);
        length=sc.nextFloat();
        breadth=sc.nextFloat();
        area=length*breadth;
        System.out.println(" area of the rectangle " + area);

    }
}