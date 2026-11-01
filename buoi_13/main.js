
function $(id) {
  return document.getElementById(id);
}


function layGiaTriSo(id) {
  var chuoi = $(id).value.trim();
  if (chuoi === "") return NaN;
  return Number(chuoi);
}

function hienLoi(idKetQua, noiDung) {
  $(idKetQua).innerHTML = '<span class="text-red-600">' + noiDung + "</span>";
}

function hienKetQua(idKetQua, noiDung) {
  $(idKetQua).innerHTML = '<span class="text-green-700">' + noiDung + "</span>";
}

function dinhDangTien(soTien) {
  return soTien.toLocaleString("vi-VN");
}

//bài 1
function layDiemKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0; 
  }
}

function layDiemDoiTuong(doiTuong) {
  switch (doiTuong) {
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
    default:
      return 0; 
  }
}

function xuLyTuyenSinh() {
  var diemChuan = layGiaTriSo("ts-chuan");
  var mon1 = layGiaTriSo("ts-m1");
  var mon2 = layGiaTriSo("ts-m2");
  var mon3 = layGiaTriSo("ts-m3");
  var khuVuc = $("ts-khuvuc").value;
  var doiTuong = $("ts-doituong").value;

  if (isNaN(diemChuan) || isNaN(mon1) || isNaN(mon2) || isNaN(mon3)) {
    hienLoi("ts-kq", "Vui lòng nhập đầy đủ điểm chuẩn và điểm 3 môn.");
    return;
  }
  if (diemChuan < 0 || mon1 < 0 || mon2 < 0 || mon3 < 0 || mon1 > 10 || mon2 > 10 || mon3 > 10) {
    hienLoi("ts-kq", "Điểm 3 môn phải nằm trong khoảng từ 0 đến 10, điểm chuẩn không được âm.");
    return;
  }

  var diemUuTien = layDiemKhuVuc(khuVuc) + layDiemDoiTuong(doiTuong);
  var tongDiem = mon1 + mon2 + mon3 + diemUuTien;
  var coMonDiem0 = mon1 === 0 || mon2 === 0 || mon3 === 0;

  var ketQua = "";
  if (coMonDiem0) {
    ketQua = "Thí sinh RỚT (có môn bị điểm 0).";
  } else if (tongDiem >= diemChuan) {
    ketQua = "Thí sinh ĐẬU.";
  } else {
    ketQua = "Thí sinh RỚT (tổng điểm thấp hơn điểm chuẩn).";
  }

  var html = ketQua + "<br>Tổng điểm đạt được: " + tongDiem;
  if (coMonDiem0 || tongDiem < diemChuan) {
    hienLoi("ts-kq", html);
  } else {
    hienKetQua("ts-kq", html);
  }
}

//bài 2
function tinhTienDien(soKw) {
  var tien = 0;
  var conLai = soKw;

  // 50kw đầu: 500đ/kw
  var bac1 = Math.min(conLai, 50);
  tien += bac1 * 500;
  conLai -= bac1;

  // 50kw kế: 650đ/kw
  var bac2 = Math.min(conLai, 50);
  tien += bac2 * 650;
  conLai -= bac2;

  // 100kw kế: 850đ/kw
  var bac3 = Math.min(conLai, 100);
  tien += bac3 * 850;
  conLai -= bac3;

  // 150kw kế: 1100đ/kw
  var bac4 = Math.min(conLai, 150);
  tien += bac4 * 1100;
  conLai -= bac4;

  // Còn lại: 1300đ/kw
  tien += conLai * 1300;

  return tien;
}

function xuLyTienDien() {
  var ten = $("dien-ten").value.trim();
  var soKw = layGiaTriSo("dien-kw");

  if (ten === "") {
    hienLoi("dien-kq", "Vui lòng nhập tên.");
    return;
  }
  if (isNaN(soKw) || soKw < 0) {
    hienLoi("dien-kq", "Số kW phải là số không âm.");
    return;
  }

  var tien = tinhTienDien(soKw);
  hienKetQua("dien-kq", "Khách hàng: " + ten + "<br>Số kW: " + soKw + "<br>Tiền điện phải trả: " + dinhDangTien(tien) + " đ");
}

// bài 3
// Thu nhập chịu thuế và các mốc bậc đều tính theo đơn vị triệu đồng
function tinhThueTNCN(thuNhapChiuThue) {
  var cacBac = [
    { gioiHan: 60, thueSuat: 0.05 },
    { gioiHan: 120, thueSuat: 0.1 },
    { gioiHan: 210, thueSuat: 0.15 },
    { gioiHan: 384, thueSuat: 0.2 },
    { gioiHan: 624, thueSuat: 0.25 },
    { gioiHan: 960, thueSuat: 0.3 },
    { gioiHan: Infinity, thueSuat: 0.35 },
  ];

  var thue = 0;
  var mocDuoi = 0;
  for (var i = 0; i < cacBac.length; i++) {
    if (thuNhapChiuThue > mocDuoi) {
      var phanTrongBac = Math.min(thuNhapChiuThue, cacBac[i].gioiHan) - mocDuoi;
      thue += phanTrongBac * cacBac[i].thueSuat;
    }
    mocDuoi = cacBac[i].gioiHan;
  }
  return thue;
}

function xuLyThue() {
  var hoTen = $("thue-ten").value.trim();
  var tongThuNhap = layGiaTriSo("thue-thunhap");
  var soNguoiPhuThuoc = layGiaTriSo("thue-phuthuoc");

  if (hoTen === "") {
    hienLoi("thue-kq", "Vui lòng nhập họ tên.");
    return;
  }
  if (isNaN(tongThuNhap) || tongThuNhap < 0) {
    hienLoi("thue-kq", "Tổng thu nhập năm phải là số không âm (đơn vị: triệu đồng).");
    return;
  }
  if (isNaN(soNguoiPhuThuoc) || soNguoiPhuThuoc < 0 || !Number.isInteger(soNguoiPhuThuoc)) {
    hienLoi("thue-kq", "Số người phụ thuộc phải là số nguyên không âm.");
    return;
  }

  var thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
  if (thuNhapChiuThue < 0) {
    thuNhapChiuThue = 0;
  }

  var thue = tinhThueTNCN(thuNhapChiuThue);
  hienKetQua(
    "thue-kq",
    "Họ tên: " + hoTen +
      "<br>Thu nhập chịu thuế: " + thuNhapChiuThue.toLocaleString("vi-VN", { maximumFractionDigits: 2 }) + " triệu" +
      "<br>Thuế thu nhập cá nhân phải trả: " + thue.toLocaleString("vi-VN", { maximumFractionDigits: 2 }) + " triệu đồng"
  );
}

//bài 4
function tinhTienCap(loai, soKetNoi, soKenh) {
  if (loai === "nhadan") {
    var phiXuLy = 4.5;
    var phiCoBan = 20.5;
    var thueKenh = 7.5 * soKenh;
    return phiXuLy + phiCoBan + thueKenh;
  }
  // Doanh nghiệp
  var phiXuLyDN = 15;
  var phiCoBanDN = 75; 
  if (soKetNoi > 10) {
    phiCoBanDN += (soKetNoi - 10) * 5;
  }
  var thueKenhDN = 50 * soKenh;
  return phiXuLyDN + phiCoBanDN + thueKenhDN;
}

function doiLoaiKhachHang() {
  var loai = $("cap-loai").value;
  var oKetNoi = $("cap-ketnoi");
  if (loai === "doanhnghiep") {
    $("cap-ketnoi-wrap").classList.remove("hidden");
    oKetNoi.disabled = false;
  } else {
    $("cap-ketnoi-wrap").classList.add("hidden");
    oKetNoi.disabled = true;
    oKetNoi.value = "";
  }
}

function xuLyTienCap() {
  var maKH = $("cap-ma").value.trim();
  var loai = $("cap-loai").value;
  var soKenh = layGiaTriSo("cap-kenh");
  var soKetNoi = 0;

  if (maKH === "") {
    hienLoi("cap-kq", "Vui lòng nhập mã khách hàng.");
    return;
  }
  if (loai === "") {
    hienLoi("cap-kq", "Vui lòng chọn loại khách hàng.");
    return;
  }
  if (loai === "doanhnghiep") {
    soKetNoi = layGiaTriSo("cap-ketnoi");
    if (isNaN(soKetNoi) || soKetNoi < 0 || !Number.isInteger(soKetNoi)) {
      hienLoi("cap-kq", "Số kết nối phải là số nguyên không âm.");
      return;
    }
  }
  if (isNaN(soKenh) || soKenh < 0 || !Number.isInteger(soKenh)) {
    hienLoi("cap-kq", "Số kênh cao cấp phải là số nguyên không âm.");
    return;
  }

  var tien = tinhTienCap(loai, soKetNoi, soKenh);
  var tenLoai = loai === "nhadan" ? "Nhà dân" : "Doanh nghiệp";
  hienKetQua(
    "cap-kq",
    "Mã khách hàng: " + maKH +
      "<br>Loại khách hàng: " + tenLoai +
      "<br>Tiền cáp: " + tien.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " $"
  );
}


$("ts-btn").addEventListener("click", xuLyTuyenSinh);
$("dien-btn").addEventListener("click", xuLyTienDien);
$("thue-btn").addEventListener("click", xuLyThue);
$("cap-btn").addEventListener("click", xuLyTienCap);
$("cap-loai").addEventListener("change", doiLoaiKhachHang);


doiLoaiKhachHang();