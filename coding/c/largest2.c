#include<stdio.h>
int main()
{
    int a,b,c;
    printf("\n enter three no ");
    scanf("%d%d%d",&a,&b,&c);
    if((a>b)&&(a>c))
    printf("\n largest no is = %d",a);
    if((b>a)&&(b>c))
    printf("\n largest no is = %d",b);
    if((c>a)&&(c>b))
    printf("\n largest no is = %d",c);
}