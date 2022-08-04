function DanhSachNhanVien() {
    this.mangNV = [];
    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }
    this.timViTri = function (tk) {
        viTri = -1;
        this.mangNV.map(function (nv, index) {
            if (nv.tkNV === tk) {
                viTri = index;
            }
        });
        return viTri;
    }
    this.xoaNV = function (tk) {
        var viTri = this.timViTri(tk);
        if (viTri > -1) {
            this.mangNV.splice(viTri, 1);
        }
    }
    this.capnhapNV = function (nv){
        var viTri = this.timViTri(nv.tkNV);
        if (viTri > -1) {
            this.mangNV[viTri] = nv;
        }
    }
    this.timKiem = function(tuKhoa){
        var mangTK = [];
        this.mangNV.map(function (nv){
            var viTriTK = nv.xepLoai.toLowerCase().indexOf(tuKhoa.toLowerCase());
            if (viTriTK > -1){
                mangTK.push(nv);
            }
        });
        return mangTK;
    }
}