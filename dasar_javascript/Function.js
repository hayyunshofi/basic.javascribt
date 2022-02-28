
//kode_persegi

function jumlahVolumeduakubus(a,b){
    var volumeA ;
    var volumeB ;
    var total;

    volumeA= a*a*a;
    volumeB= b*b*b;

    total = volumeA + volumeB;

    return(total);
}
console .log(jumlahVolumeduakubus(a,b));

// Parameter (variabel yang tulis di dalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang dikirimkan saat function dipanggil)
function tambah(a,b){ //(a+b) dinamakan parameter
    return a+b;
}
// Argument (nilai yang dikirimkan ke parameter saat fungsi di panggil)
var coba = tambah(5,10); //(5,10) dinamakan argumen

// 1

function tambah(a,b){
    return a+b;
}
var hasil = tambah (2,3);
console.log(hasil);

// 2 argumen menggunakan expresi

function tambah(a,b){
    return a+b;
}
var a = perseInt(prompt("masukan angka 1 :"));
var b = perseInt(prompt("masukan angka 2 :"));
var hasil = tambah (a,b);
console.log(hasil);

// 3

function tambah(a,b){
    return a+b;
}
function kali(a,b){
    return a*b;
}
var hasil = kali(tambah(1,2), tambah(3,4));
console.log(hasil);

// 4 arguments (array yang berisi nilai yang dikirimkan saat fungsi dipanggil)

function tambah(){
    var hasil = 0;
    for (var i = 0 ; i < arguments.length; i++){
        hasil += arguments[1];
    }
    return hasil;
}
var coba = tambah(1,2,3,4);
console.log(coba);


// function refactoring
// refactoring = sebuah proses mengubah kode agar menjadi lbih baik tanpa mengubah fungsionalitasnya

// scop (1 block scope )
{
}

//rekuursif (sebuah fungdi yang memanggil dirinya sendiri)
// Implementasi Rekursif
//1 menggantikan looping
//2 Fibonacci
//3 pencarian dan penelusuran pada struktur data list dan tree
//4 bhs pemograman yang tidak memiliki pengulangan(Haskel,Erlang, Prolok)

    function cetakAngka(n){
        if(n=== 0){//Base case
            return;//Base case
        }
        console.log(n);
        cetakAngka(n-1);
    }
    cetakAngka(10);

    //Faktorial
    function Faktorial(n){
        if (n === 0) return 1;
        return n * Faktorial(n -1);
    }

    // Function Expression
    //function indeifier opt(ParameterList opy) {Function Body}
   // lebih powerfull(sebagai closure,argumen untuk function lain)
    var tampilPesan = function (nama){
                        alert("halo" + nama);
    }
    tampilkanPesan = ("Hayyun shofi")
    // Function Declaration
    //Lebih fleksibel(dapat di tulis dimanapun)/karena konsep hosting










