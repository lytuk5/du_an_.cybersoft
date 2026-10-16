  //Bài 1
const btnLuong = document.getElementById("btnLuong");
btnLuong.onclick = function (){
    const ketQuaLuong = document.getElementById("ketQuaLuong")
    const luongNgay = Number(document.getElementById("luongNgay").value);
    const soNgaylam = Number(document.getElementById("soNgaylam").value);
   let tongLuong = 0;
   tongLuong = luongNgay * soNgaylam;
   const formatter = new Intl.NumberFormat("vi-VN",{
    style: "currency", currency: "VND"
   });
   const KetQua = "Tổng tiền lương là: " + formatter.format(tongLuong);
    ketQuaLuong.innerHTML = KetQua;
    console.log(KetQua);
}


//bài 2
const btnTrungBinh = document.getElementById("btnTrungBinh");
btnTrungBinh.onclick = function (){
    const ketQuaTrungBinh = document.getElementById("ketQuaTrungBinh");
    const so1 = Number(document.getElementById("so1").value);
    const so2 = Number(document.getElementById("so2").value);
    const so3 = Number(document.getElementById("so3").value);
    const so4 = Number(document.getElementById("so4").value);
    const so5 = Number(document.getElementById("so5").value);
    const Tong = so1 + so2 + so3 + so4 + so5;
    const TrungBinh = Tong / 5;
    const thongBao = "kết quả trung bình của 5 số là: " + TrungBinh;
    ketQuaTrungBinh.innerHTML = thongBao;
    console.log(thongBao);
}

//bài 3
const GIA_USD = 23500
const btnDoiTien = document.getElementById("btnDoiTien");
btnDoiTien.onclick = function (){
    const ketQuaDoiTien = document.getElementById("ketQuaDoiTien");
    const USD = document.getElementById("USD").value;  
    
const DoiTien = GIA_USD * USD;
const formatter = new Intl.NumberFormat("vi-VN",{
    style: "currency", currency: "VND"
   });
   const KetQua = "Tổng số tiền quy đổi là: " + formatter.format(DoiTien);
    ketQuaDoiTien.innerHTML = KetQua;
    console.log(KetQua);
    
};

//bài 4
const btnChuVi = document.getElementById("btnChuVi");
btnChuVi.onclick = function () {
    const ketQua = document.getElementById("ketQuaHinhChuNhat");
    const chieuDai = Number(document.getElementById("chieuDai").value);
    const chieuRong = Number(document.getElementById("chieuRong").value);
    const chuvi = (chieuDai + chieuRong) * 2;
    const KetQua = "chu vi hình chữ nhật là: " + chuvi;
    ketQuaHinhChuNhat.innerHTML = KetQua;
    console.log(KetQua);
};

const btnDienTich = document.getElementById("btnDienTich");
btnDienTich.onclick = function () {
    const ketQua = document.getElementById("ketQuaHinhChuNhat");
    const chieuDai = Number(document.getElementById("chieuDai").value);
    const chieuRong = Number(document.getElementById("chieuRong").value);
    const dientich = chieuDai * chieuRong;
    const KetQua = "diện tích hình chữ nhật là: " + dientich;
    ketQuaHinhChuNhat.innerHTML = KetQua;
    console.log(KetQua);
};

//bài 5
const btnTongSoKy = document.getElementById("btnTongSoKy");
btnTongSoKy.onclick = function () {
  const ketQuaKySo = document.getElementById("ketQuaKySo");
  const number = Number(document.getElementById("soHaiChuSo").value);

  const hangChuc = Math.floor(number / 10);
  const hangDV = number % 10;

  const total = hangChuc + hangDV;

  const result = `Tổng 2 ký số là: ${total}`;
  ketQuaKySo.innerHTML = result;
  console.log(result);
};