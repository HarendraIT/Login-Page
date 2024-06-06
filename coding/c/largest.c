#include<stdio.h>
int main()
{
    int a,b,c;
    printf("\n enter three number");
    scanf("%d%d%d",&a,&b,&c);
    if(a>b)
    {
        if (a>c)
        {
            printf("\n largest no is %d ",a);
            
        }
        else
        printf("\n largest no is %d ",c);
        
    }
    else{
        if(b>c)
        printf("\n largest no is %d ",b);
        else
        printf("\n largest no is %d ",c);
    }
}