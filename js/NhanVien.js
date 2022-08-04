function NhanVien(tkNV, name, email, password, ngayLam, luongCB, chucVu, gioLam) {
    this.tkNV = tkNV;
    this.name = name;
    this.email = email;
    this.password = password;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";
    this.tinhTongLuong = function () {
        switch (this.chucVu.slice(0, 1)) {
            case "S":
                this.tongLuong = this.luongCB * 3;
                break;
            case "T":
                this.tongLuong = this.luongCB * 2;
                break;
            case "N":
                this.tongLuong = this.luongCB;
                break;
            default:
                break;
        }
    };
    this.xepLoaiNV = function () {
        if (this.gioLam > 0 && this.gioLam < 160) {
            this.xepLoai = "Trung bình";
        }
        else if (this.gioLam >= 160 && this.gioLam < 176) {
            this.xepLoai = "Khá";
        }
        else if (this.gioLam >= 176 && this.gioLam < 192) {
            this.xepLoai = "Giỏi";
        }
        else if (this.gioLam >= 192) {
            this.xepLoai = "Xuất sắc";
        }
    };
}