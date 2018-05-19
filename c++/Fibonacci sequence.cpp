# include <iostream>
using namespace std;
int main()
{
	int a[50];
	a[0]=1;
	a[1]=1;
	int k;
	cin>>k;
	for(int c=2; c<k; c++)
		{
			a[c]=a[c-1]+a[c-2];
		}
	for(int c=0; a[c]!=NULL; c++)
		{
			if((c+1)%5==0)
				{
					cout<<a[c]<<endl;
				}
			else{
				cout<<a[c]<<"\t";
			}
		}
	cout<<a[k];
}
