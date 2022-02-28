console.log("hello world!");
alert ("hello world!");

// type data
String = " hayyun shofi";
Boolean = true/false;
Number = 10,9,15;
Array = [1,2,3];
Object = {hello: "dunia"};
//pengecekan jenis type data yg dimiliki variabel (typeof)
var mobil = "avanza";
typeof mobil 

// operator pada javascript (simbol operasi)
// 1 operator aritmatika(matematika) {jumlah persamaan()*/+-}
    var a = 10;
        b = 20;
    var ab = a+b; // 30
// 2 operator penugasan
    var x = 10 ;
        x += 5 ; // 15
// 3 operator pebandingan menghasilkan bolean (true/false)
    10 == 10 ; 
    true
    10 != 10 ;
    false
    10 == "10";
    true
    10 === "10";
    false
// 4 operator logika (&& (END) (||(OR) (!(NOT)
    (x % 2 == 0);
    true
    (x % 2 == 0) && (x < 10)
    false //(&&) dikarenakan salah satu salah
    (x % 2 == 0) || (x < 10)
    true //(||) dikarenakan salah satu benar
    !(x < 20);
    false // ! dikarenakan ada tanda seru
// 5 operator String 
    var nama1 = "hayyun";
    var nama2 = "shofi";
    var nama3 = nama1+""+nama2;
        nama3 = "hayyun shofi" 
     
    var angka1 = 1 ;
    var angka2 = "10";
    var angka3 = angka1+""+angka2;
        angka3 = "110"    
// 6 operator kondisional
    (x % 2 == 0)? "GENAP" : "GANJIL";

//plain text ("")('')
"saya makan"
// escape (charakter) (\")(\')(\0(karakter null))(\n(nambah baris baru))(\b(nambah spasi))
'ini adalah hari jum\'at'
// fungsi (.length) menghitung kerakter
//variabel
var nama = "hayyun shofi";
    umur = 23;
    lulus = true;

//popup box ()
alert("hello woerld1"); //memberikan pesan sederhana ke user
prompt("masukan nama!"); //ada text box
var nama = prompt("masukan nama!");
alert(nama);
//confirm
confirm("kamu yakin")// mengembalikan nilai true/false
var tes = confirm("masukan nama!");

if ( tes === true){
    alert("user menekan ok!")
}else{
    alert("user menekan cancel!")
}
//perulangan confirm (ada 2 tombol)
var lagi = true;

while ( lagi === true){
    var nama = prompt("masukan nama:");
    alert("halo" + nama);

    lagi = confirm("coba lagi?");

alert("terima kasih..");
}
//control flow (alat terkendali)
// 1pengulangan (for)(while)(do while)
//(for)
alert("mulai");
for(var i = 0; i < 5; i++){
    alert("hello wordl!");

alert("selesai");
}
// 2pengkondisian(percabangan) (if)(if..else)(if..else if..else)(switch)
var angka = prompt("masukkan angka :");

if(angka % 2 == 0){
    alert(angka + "ADALAH BILANGAN GENAP");
}else{
    alert(angka + "adalah bilangan ganjil");
}

//pengulangan while
//1 memberhentikan loop while
var ulang = true;
while(ulang){
    console.log("hello word");
    ulang = confirm("lagi");
}
// 2 memberhentikan dengan 
var nilaiawal = 1;
while(nilaiawal <= 5){
    console.log("hello world!"); // console.log("hello world" + nilaiawal + "x");
nilaiawal++;
}
//table menelusuran
var jmlangkot = 10;
var noangkot = 1;
while(noangkot <= jmlangkot){
    console.log ("Angkot No." + noangkot + "beroperasi dengan baik");
noangkot++;
}

// (== perbandingan) (=== indentitas)
// Swict
 var angka = prompt("maukan angka");

 switch (angka){
    case  "1" :
        alert(" Anda memasukan angka 1");
        break;
    case  "2" :
        alert(" Anda memasukan angka 2");
        break;
    case  "3" :
        alert(" Anda memasukan angka 3");
        break;
    default :
        alert("Angka yang anda masukkan salah");
        break;
 }
// membuat **** / * kebawah
// 1
var s = ""; 
for(var i = 0; i < 10; i++){
    s += "*";
    s += "\n";
}
console.log(s);
// 2
for(var i = 0; i < 10; i++){
    for (var j =0 ; j < 5; j++){
        s += "*";  
    } 
    s += "\n";
}
console.log(s);
// 3
for(var i = 0; i < 10; i++){
    for (var j =0 ; j <= i; j++){
        s += "*";  
    } 
    s += "\n";
}
console.log(s);
// 4
for(var i = 10; i > 10; i--){
    for (var j =0 ; j < i; j++){
        s += "*";  
    } 
    s += "\n";
}
console.log(s);



// Function (kunci utama pada javascribt)
















