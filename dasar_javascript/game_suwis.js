var tanya = true
while ( tanya){
    // menangkap pilihan pleyer
    var p = prompt("pilih :gajah, semut, orang")

    //menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if ( comp < 0.34){
        comp = "gajah";
    }else if (comp >= 0.34 && comp < 0.67){
        comp = "orang";
    }else{
        comp = "semut";
    }
    var hasil = "";
    //menentukan rules
    if (p == comp ){
        hasil ="seri";
    }else if ( p == "gajah"){
        hasil = ( comp == "orang ") ? "menang!" : "kalah!";
    }else if ( p == "orang"){
        hasil = ( comp == "gajah ") ? "kalah!" : "menang!";
    }else if( p == "semut"){
        hasil = ( comp == "orang") ? "kalah!" : "menang!";
    }else{
        hasil= "masukkan pilihan yang salah!";
    }
    // tampilkan hasilnya
    alert("kamu memilih : " + p + " dan komputer memilih : " + comp + "\nmaka hasilnya : " + hasil);

    tanya =  confirm("lagi!");
}
alert ("terimakasih sudah bermain.");