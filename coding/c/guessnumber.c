#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main()
{
    int number, guess, nguess=1;
    srand(time(0));
    number=rand()%100+1;
    //printf("the guesses number is %d",number);
    do{
        printf("\n enter the value 1 to 100 ");
        scanf("\n %d",&guess);
        if (guess>number)
        {
         printf("lower no please");
        }
        else if (guess<number)
        {
         printf("higher no please");
        }
        else{
            printf("you guested attempt %d time\n",nguess);
        }
        nguess++;
        
    }while (guess!=number);
   
    

}