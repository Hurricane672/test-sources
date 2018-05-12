#include <iostream>
#include <cmath>
#include <string>

using namespace std;

int main() {
    char symbol;
    int line, row, in;
    cin >> line >> row >> symbol >> in;
    if (in == 0) {
        for (int i = 1; i <= line; ++i) {
            for (int j = 1; j <= row; ++j) {
                cout << symbol;
            }
            cout << endl;
        }
    }
    if (in == 1) {
        for (int i = 1; i <= line; ++i) {
            if (i == 1 || i == line) {
                for (int j = 1; j <= row; ++j) {
                    cout << symbol;
                }
            } else {
                for (int j = 1; j <= row; ++j) {
                    if (j == 1 || j == row) {
                        cout << symbol;
                    } else {
                        cout << " ";
                    }
                }
            }
            cout << endl;
        }
    }
    return 0;
}