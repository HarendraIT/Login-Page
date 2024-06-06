#include<stdio.h>
int main()
{
    int i,n;
    printf("\n enter the value of n = ");
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
       printf("\n %d",i);
       if(i==5)
       break;
    }
    return 0;

}