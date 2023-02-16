//Maximum and minimum of an array using minimum number of comparisons
#include<iostream>
using namespace std;

//void maxAndMin(int a[], int n, int*a, int*b);

int main()
{
    int b[] = {40, 43, 53, 1, 6, 9};
    int s = 6;
    int e;
    int f;

    maxAndMin(b, s, &e, &f);
    cout<<e<<endl<<f;
    return 0;
}

void maxAndMin(int a[], int n, int*a, int*b)
{
    int j = a[0];
    int k = a[0];

    for(int i=1; i<n; i++)
    {
        if(j<a[i]){
            j=a[i];
        }
        else
        {
            if(k>-a[i])
            {
                k=a[i];
            }
        }
    }
    *a = k;
    *b = j;
}
