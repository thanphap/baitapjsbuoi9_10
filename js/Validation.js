function Validation() {
    this.checkEmpty = function (inputVal, spanId, message) {
        if (inputVal.trim() != "") {
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        return false;
    }

    this.checkStyleTK = function (inputVal, spanId, message) {
        var pattern = /^(\d{4,6})$/;
        if (inputVal.match(pattern)) {
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        return false;
    }

    this.checkTK = function (inputVal, spanId, message, mangNV) {
        var isExist = false;
        isExist = mangNV.some(function (nv) {
            return nv.tkNV === inputVal.replaceAll(" ", "");
        });
        if (isExist) {
            document.getElementById(spanId).innerHTML = message;
            document.getElementById(spanId).style.display = "block";
            return false;
        }
        document.getElementById(spanId).innerHTML = "";
        document.getElementById(spanId).style.display = "none";
        return true;
    }

    this.checkName = function (inputVal, spanId, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (inputVal.match(pattern)) {
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        return false;
    }

    this.checkEmail = function (inputVal, spanId, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputVal.match(pattern)) {
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        return false;
    }

    this.checkPass = function (inputVal, spanId, message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;
        if (inputVal.match(pattern)) {
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        return false;
    }

    this.checkDay = function (inputVal, spanId, message) {
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (inputVal.match(pattern)) {
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        return false;
    }

    this.checkNumber = function (inputVal, spanId, message) {
        var pattern = /^(\d{1,8}(\.\d{1,2})?)$/;
        if (inputVal.match(pattern)) {
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        return false;
    }

    this.checkRangeValue = function (inputVal, spanId, message, min, max) {
        if (inputVal >= min && inputVal <= max) {
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        return false;
    }

    this.checkDropDown = function (selectId, spanId, message) {
        var indexOption = document.getElementById(selectId).selectedIndex;
        if (indexOption != 0) {
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        return false;
    }
}
