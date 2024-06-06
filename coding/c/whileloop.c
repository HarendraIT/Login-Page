#include <stdio.h>
int main()
{
    int a;
    printf("enter the value of a=");
    scanf("%d", &a);
    while (a < 20)
    {
        printf("\n %d", a);
        a++;
    }
}