#include <iostream>
#include <conio.h> 
using namespace std;

int kalkulator() {
 char znak;
 cout << "\n\n\nPodaj co chcesz zrobic w kalkulatorze:\n";
 cin >> znak;
 cout << "Ok, podales/as znak " << znak << ". Teraz podaj pierwsza liczbe.";
 char znak1;
 cin >> znak1;
 cout << "Ok, podales pierwsza liczbe, teraz podaj 2!";
 char znak2;
 cin >> znak2;
 cout << "Ok, podales droga liczbe. Zaczynam liczyc...";
 //if(znak == "+") {
 // float wynik = znak1 + znak2;
 // cout << wynik;
 //} else if(znak == "-") {
 // float wynik = znak1 - znak2;
 // cout << wynik;
 //} else if(znak == "*") {
 //	
 //} else if(znak == "/") {
 //	
 //}
}
}

int hello() {
 string strImie;
 cout << "\n\nWpisz swoje imie!\n";
 cin >> strImie;
 cout << "\nTwoje imie to " << strImie << ".";
 kalkulator();
}

int main() {
 cout << "Majo.exe v0.0.0";
 hello();
}
