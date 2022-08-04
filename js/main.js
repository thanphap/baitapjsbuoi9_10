var dsnv = new DanhSachNhanVien();
var validation = new Validation();

function getELE(id) {
    return document.getElementById(id);
}

function resetForm() {
    getELE("formNV").reset();
    getELE("tknv").disabled = false;
    document.querySelectorAll("#formNV span").forEach(el => el.style.display = "none"); 
}

function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != undefined) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
    }
    hienthiDS(dsnv.mangNV);
}

getLocalStorage();

function themNhanVien() {
    var tkNV = getELE("tknv").value;
    var name = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = true;

    isValid &= validation.checkEmpty(tkNV, "tbTKNV", "Số tài khoản không được để trống") && validation.checkStyleTK(tkNV, "tbTKNV", "Số tài khoản chứa 4-6 ký số") && validation.checkTK(tkNV, "tbTKNV", "Số tài khoản đã tồn tại", dsnv.mangNV);

    isValid &= validation.checkEmpty(name, "tbTen", "Tên nhân viên không được để trống") && validation.checkName(name, "tbTen", "Tên nhân viên chỉ chứa ký tự chữ");

    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng");

    isValid &= validation.checkEmpty(password, "tbMatKhau", "Mật khẩu không được để trống") && validation.checkPass(password, "tbMatKhau", "Mật khẩu cần ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt, độ dài từ 6-8 ký tự");

    isValid &= validation.checkEmpty(ngayLam, "tbNgay", "Ngày làm không được để trống") && validation.checkDay(ngayLam, "tbNgay", "Ngày làm không đúng định dạng mm/dd/yyyy");

    isValid &= validation.checkEmpty(luongCB, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkNumber(luongCB, "tbLuongCB", "Lương cơ bản chỉ chứa ký tự số") && validation.checkRangeValue(luongCB, "tbLuongCB", "Số lương không hợp lệ (trong khoảng 1-20 triệu)", 10e5, 2*10e6);

    isValid &= validation.checkDropDown("chucvu", "tbChucVu", "Chức vụ chưa được lựa chọn");

    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không được để trống") && validation.checkNumber(gioLam, "tbGiolam", "Giờ làm chỉ chứa ký tự số") && validation.checkRangeValue(gioLam, "tbGiolam", "Số giờ làm không hợp lệ (trong khoảng 80-120 giờ)", 80, 200);

    if (isValid) {
        var nv = new NhanVien(tkNV, name, email, password, ngayLam, luongCB, chucVu, gioLam);
        nv.tinhTongLuong();
        nv.xepLoaiNV();
        dsnv.themNV(nv);
        setLocalStorage();
        hienthiDS(dsnv.mangNV);
        resetForm();
    }
}
getELE("btnThemNV").onclick = themNhanVien;


function hienthiDS(mangNV) {
    printList = "";
    mangNV.map(function (nv) {
        printList += `
            <tr>
                <td>${nv.tkNV}</td>
                <td>${nv.name}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.xepLoai}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="xemNhanVien('${nv.tkNV}')">Sửa</button>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.tkNV}')">Xóa</button>
                </td>
            </tr>
        `
    });
    getELE("tableDanhSach").innerHTML = printList;
}

function xoaNhanVien(tk) {
    dsnv.xoaNV(tk);
    setLocalStorage();
    hienthiDS(dsnv.mangNV);
}

function xemNhanVien(tk) {
    var viTri = dsnv.timViTri(tk);
    if (viTri > -1) {
        xemNV = dsnv.mangNV[viTri];
        getELE("tknv").value = xemNV.tkNV;
        getELE("tknv").disabled = true;
        getELE("name").value = xemNV.name;
        getELE("email").value = xemNV.email;
        getELE("password").value = xemNV.password;
        getELE("datepicker").value = xemNV.ngayLam;
        getELE("luongCB").value = xemNV.luongCB;
        getELE("chucvu").value = xemNV.chucVu;
        getELE("gioLam").value = xemNV.gioLam;
    }
}

function capnhapNhanVien() {
    var tkNV = getELE("tknv").value;
    var name = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = true;

    isValid &= validation.checkEmpty(name, "tbTen", "Tên nhân viên không được để trống") && validation.checkName(name, "tbTen", "Tên nhân viên chỉ chứa ký tự chữ");

    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng");

    isValid &= validation.checkEmpty(password, "tbMatKhau", "Mật khẩu không được để trống") && validation.checkPass(password, "tbMatKhau", "Mật khẩu cần ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt, độ dài từ 6-8 ký tự");

    isValid &= validation.checkEmpty(ngayLam, "tbNgay", "Ngày làm không được để trống") && validation.checkDay(ngayLam, "tbNgay", "Ngày làm không đúng định dạng mm/dd/yyyy");

    isValid &= validation.checkEmpty(luongCB, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkNumber(luongCB, "tbLuongCB", "Lương cơ bản chỉ chứa ký tự số") && validation.checkRangeValue(luongCB, "tbLuongCB", "Số lương không hợp lệ (trong khoảng 1-20 triệu)", 10e5, 2*10e6);

    isValid &= validation.checkDropDown("chucvu", "tbChucVu", "Chức vụ chưa được lựa chọn");

    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không được để trống") && validation.checkNumber(gioLam, "tbGiolam", "Giờ làm chỉ chứa ký tự số") && validation.checkRangeValue(gioLam, "tbGiolam", "Số giờ làm không hợp lệ (trong khoảng 80-120 giờ)", 80, 200);

    if (isValid) {
        var nv = new NhanVien(tkNV, name, email, password, ngayLam, luongCB, chucVu, gioLam);
        nv.tinhTongLuong();
        nv.xepLoaiNV();
        dsnv.capnhapNV(nv);
        setLocalStorage();
        hienthiDS(dsnv.mangNV);
    }
}
getELE("btnCapNhat").onclick = capnhapNhanVien;

function timKiemTheoLoai() {
    var tuKhoa = getELE("searchName").value;
    var mangTK = dsnv.timKiem(tuKhoa.trim());
    hienthiDS(mangTK);
}
getELE("searchName").onkeyup = timKiemTheoLoai;
getELE("btnTimNV").onclick = timKiemTheoLoai;

getELE("btnDong").onclick = resetForm;