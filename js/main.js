 
//  Bài 1
 /* ----------------------------- Mô hình 3 khối ----------------------------- */
// Khối 1: input (dữ liệu được cung cấp)
//    - Lương 1 ngày :100.000
//    - Số ngày làm : 30

// Khối 2: Các bước xử lý 
//     B1: Khai báo biến và lưu giá trị input
//     B2:Lập công thức tính toán
//     Tổng tiền lương = Lương 1 ngày (100.000) x số ngày làm 

// Khối 3: Output (kết quả đạt được)
//     Tổng tiền Lương.


function tinhtienluong(){
    // B1
    var ngaylam = document.getElementById("ngaylam").value; 
    // B2
    var tongluong = (Number(ngaylam)*100000);
    document.getElementById("tongluong").innerHTML = tongluong; 
}

document.getElementById("btntinhluong").onclick = tinhtienluong;

// Bai 2
/* ----------------------------- Mô hình 3 khối ----------------------------- */
// Khối 1: input (dữ liệu được cung cấp)
    // Nhập số 1,2,3,4,5

// Khối 2: Các bước xử lý 
//     B1: Khai báo biến và lưu giá trị input
//     B2:Lập công thức tính toán
//     Trung bình = (So1+so2+so3+so4+so5)\5;
// Khối 3: Output (kết quả đạt được)
//     Trung Bình

function tinhtrungbinh(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;

    var trungBinh = ( Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5) ) / 5;
    document.getElementById("txttb").innerHTML = trungBinh; 
}
document.getElementById("btntinhtb").onclick = tinhtrungbinh;


// Bai 3
/* ----------------------------- Mô hình 3 khối ----------------------------- */
// Khối 1: input (dữ liệu được cung cấp)
    // Nhập số tiền

// Khối 2: Các bước xử lý 
//     B1: Khai báo biến và lưu giá trị input
//     B2:Lập công thức tính toán
//     lấy số tiền *23500
// Khối 3: Output (kết quả đạt được)
//     số tiền quy dổi được

function quydoi(){
    var sotien = document.getElementById("sotien").value;
    var tongquydoi = (Number(sotien)*23500);
    document.getElementById("txtdoi").innerHTML = tongquydoi
}

document.getElementById("btndoi").onclick = quydoi;

// Bai 4
/* ----------------------------- Mô hình 3 khối ----------------------------- */
// Khối 1: input (dữ liệu được cung cấp)
    // Nhập số chiều dai và rộng

// Khối 2: Các bước xử lý 
//     B1: Khai báo biến và lưu giá trị input
//     B2:Lập công thức tính toán
//     Diện tích = dài * rộng
//     Chu vi = (dài +rộng)*2
// Khối 3: Output (kết quả đạt được)
//     Diện tích và Chu vi

function tinh(){
    var dai = document.getElementById("dai").value;
    var rong = document.getElementById("rong").value;

    var dientich = (Number(dai))*(Number(rong));
    var chuvi = ((Number(dai))+(Number(rong)))*2;

    document.getElementById("txtdairong").innerHTML = "Diện tích : " + dientich +", Chu vi : " + chuvi;
}

document.getElementById("btntinh").onclick = tinh;

// Bai 5
/* ----------------------------- Mô hình 3 khối ----------------------------- */
// Khối 1: input (dữ liệu được cung cấp)
    // Nhập số có 2 chữ số

// Khối 2: Các bước xử lý 
//     B1: Khai báo biến và lưu giá trị input
//     B2:Lập công thức tính toán
//     Số hàng đơn vị = số %10
//     Số hàng chục = số / 10
//     Tổng 2 ký số = số hàng đơn vị + số hàng chục
// Khối 3: Output (kết quả đạt được)
//     Tổng 2 ký số

function tong2kyso(){
    var so = document.getElementById("so").value;

    var so_hang_dv = (Number(so) % 10);
    // parseInt ép kiểu số thực 
    var so_hang_chuc = parseInt((Number(so) / 10));
    var tong = so_hang_dv + so_hang_chuc;
   

    document.getElementById("txt2so").innerHTML = tong;
}

document.getElementById("btntinh2so").onclick = tong2kyso;