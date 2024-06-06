#include<stdio.h>
int main()
{
    int year;
    printf("\n enter an year = ");
    scanf("%d",&year);
    if(((year%4==0)||(year%400==0))&&(year%100!=100))
    printf("\n leap year");
    else
    printf("\n not leap year");

}