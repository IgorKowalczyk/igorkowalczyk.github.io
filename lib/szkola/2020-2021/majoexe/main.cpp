#include <iostream>
#include <conio.h> 
using namespace std;

int hello() {
 string strImie;
 cout << "\n\nPlease enter your name!\n";
 cin >> strImie; 
 cout << "\nTwoje imie to " << strImie << ".";
}

int main() {
 cout << "Majo.exe v0.0.0";
 hello();
}

