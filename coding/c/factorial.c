#include<stdio.h>
int main()
{
    int i,n,j=1;
    printf("enter the value ");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    j=j*i;
    printf("%d",j);
}