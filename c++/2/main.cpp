#include <bits/stdc++.h>

using namespace std;

int min(int a, int b) {
    return a >= b ? b : a;
}

bool prime(int a) {
    int x = 2;
    while (x < a) {
        if (a % x != 0 && x != a - 1) {
            x++;
            continue;
        }
        if (a % x == 0) {
            return false;
        }
        if (a % x != 0 && x == a - 1) {
            cout << a << endl;
            return true;
        }
    }
}

int bothPrime(int a, int b, int x) {
    {
        while (true) {
            if (a % x != 0 || b % x != 0) {
                x--;
                continue;
            } else {
                return x;
            }

        }
    }
}


int main() {
    int v1, v2, c;
    cin >> v1 >> v2;
    c = min(v1, v2);
    while (c != 1) {
        c = bothPrime(v1, v2, c);
        if (!prime(c)) {
            c--;
            continue;
        } else {
            return 0;
        }
    }
    cout << 0 << endl;
    return 0;
}