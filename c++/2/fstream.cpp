//
// Created by Eternal Memory on 2018/5/11.
//
#include <iostream>//cin,cout
#include <fstream>//ifstream,ofstream
#include <cstdio>//printf,scanf,getchar()
#include <string>//string
#include <bits/stdc++.h>
using namespace std;
int file (int a) {
    /*   ifstream fin("in.txt");
       ofstream fout("out.txt");
       int temp,sum=0;
       while (fin>>temp){//从in.txt中读取数字并放入temp中
           sum+=temp;
       }
       fout<<sum<<endl;
       fin.close();
       fout.close();
       fstream file;
       file.open("file1.txt",ios::in);
       file.open("file2.txt",ios::out);

       return 0;
       //getchar()用于暂停 = system（“pause”）*/
    /*ifstream in("file1.txt");
    ofstream out("file2.txt");
    if (in.is_open() && out.is_open()) {
        int a, b = 1, sum = 0;
        while (in >> a) {
            if (b % 2 != 0) {
                sum += a;
                b++;
                continue;
            }
            if (b % 2 == 0) {
                sum += a;
                out << sum << endl;
                sum = 0;
                b++;
                continue;
            }
        }
        return 0;
    }
    if (in.fail() && out.fail()) {
        cout << "Fail to open." << endl;
    }
    in.close();
    out.close();*/
    //ifstream in("file3.txt");
    //ofstream out("copy.txt");
    //char a;
    //string s;
    //while(/*!in.eof()*//*in>>a*/getline(in,s)){
    //    out<<s<<endl;
    //}
    //out<<s<<endl;
}
