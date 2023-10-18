// // Hằng số về loại xe
// const UBER_CAR = "uberCar";
// const UBER_SUV = "uberSUV";
// const UBER_BLACK = 'uberBlack';

// // Hàm giúp kiểm tra và lấy sổ tiền đầu tiên
// function giaTienKmDauTien(loaiXe) {
//     switch (loaiXe) {
//         case UBER_CAR:
//             return 8000;
//         case UBER_SUV:
//             return 9000;
//         case UBER_BLACK:
//             return 10000;    
//     }
// }

// // Hàm giúp kiểm tra và lấy số tiền từ 1 đến 19
// function giaTienKmTu1Den19(loaiXe) {
//     switch (loaiXe) {
//         case UBER_CAR:
//             return 7500;
//         case UBER_SUV:
//             return 8500;
//         case UBER_BLACK:
//             return 9500;    
//     }
// }

// // Hàm giúp kiểm tra và lấy số tiền từ 19 trở lên
// function giaTienKmTu19TroLen(loaiXe) {
//     switch (loaiXe) {
//         case UBER_CAR:
//             return 7000;
//         case UBER_SUV:
//             return 8000;
//         case UBER_BLACK:
//             return 9000;    
//     }
// }

// document.getElementById("nutTinhTien").onclick = function () {

//     // Kiểm tra người dùng đã chọn loại xe hay chưa
//     if(document.querySelector("input[name='selector']:checked") == null){
//         alert("Vui lòng chọn loại xe");
//         // Sử dụng return dể người dùng không chọn loại xe, hàm sẽ ngưng và ko xử lí những đoạn code ở phía dưới
//         return;
//     }
//     var loaiXe = document.querySelector("input[name='selector']:checked").value ;
//     console.log(loaiXe);

//     // Nếu số km và thời gian ko nhập thì sẽ tạo alert và ko cho xử lí đoạn code ở phía dưới

//     var soKm = document.getElementById("txt-km").value * 1;
//     if(soKm == 0){
//         alert("Vui lòng nhập số KM")
//         return
//     }
//     console.log(soKm)

//     var soThoiGian =document.getElementById("txt-thoiGianCho").value * 1;
//     if(soThoiGian == 0){
//         alert("Vui lòng nhập thời gian chờ")
//         return
//     }
//     console.log(soThoiGian)

//     var tienKmDauTien = giaTienKmDauTien(loaiXe);
//     var tienKmTu1Den19 = giaTienKmTu1Den19(loaiXe);
//     var tienKmTu19TroLen = giaTienKmTu19TroLen(loaiXe);

  
//     // console.log(tienKmDauTien)
//     // console.log(tienKmTu1Den19)
//     // console.log(tienKmTu19TroLen)

//     // Theo đề bài thì có 3 trường hợp để tính tiền
//     // TH1 dùng 1km đầu
//     // TH2 dùng 1km đến 19km
//     // TH3 dùng trên 19km

//     var tongTien = 0;

//     if(soKm == 1){
//         tongTien = tienKmDauTien
//     }
//     else if(soKm >= 2 && soKm < 19){
//         tongTien = tienKmDauTien + (soKm - 1) * tienKmTu1Den19
//     }
//     else{
//         tongTien = tienKmDauTien + 18 * tienKmTu1Den19 + (soKm - 19) * tienKmTu19TroLen
//     }
//     console.log(tongTien)

//     document.getElementById("divThanhTien").style.display = "block";
//     document.querySelector("#xuatTien").innerHTML = tongTien.toLocaleString('vi', {style : 'currency', currency : 'VND'});;


// }

document.querySelector("#nutTinhTien").onclick = function () {
    // Muốn gọi ra thẻ có các vulue khác nhau nhưng dùng 1 selector thì dùng query....và lưu ý dùng dấy nháy đơn (''):checked thì giá trị mới được chọn nếu ko thì chỉ nhận giá trị đầu tiên
    var loaiXe = document.querySelector("input[name='selector']:checked").value;
    console.log(loaiXe);

    var soKm = document.getElementById("txt-km").value*1;
    console.log(soKm)

    var soThoiGianCho = document.getElementById("txt-thoiGianCho").value*1;
    console.log(soThoiGianCho)

    // Số KM đầu tiên 
    var soKmDauTien = giaTienSoKmDauTien(loaiXe);

    // Số KM từ 1 đến 19
    var soKmTu1Den19 =  giaTienSoKmTu1Den19(loaiXe);

    // Số KM trên 19
    var soKmTren19 = giaTienSoKmTren19 (loaiXe);

    console.log(soKmDauTien)
    console.log(soKmTu1Den19)
    console.log(soKmTren19)

    // Công thức tính tiềN
    var tongTien = 0;

    if(soKm <= 1){
        tongTien = soKm * soKmDauTien
    }
    else if(1 < soKm && soKm <= 19){
        tongTien =  soKmDauTien + (soKm - 1) * soKmTu1Den19
    }
    else{
        tongTien = soKmDauTien + 18 * soKmTu1Den19 + ( soKm- 19 ) * soKmTren19
    }
    console.log(tongTien);

    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

// Để thay đổi các loại tính xe thì nên đặt hằng số cho các tên xe
const xeCar = "uberCar";
const xeSuv = "uberSUV";
const xeBlack = "uberBlack";

// Để tiện dùng, sửa chửa và bảo trì thì chúng ta sẽ sử dụng tính năng function riêng biết cho từng công thức tính 
// Tính năg số KM đầu tiên
function giaTienSoKmDauTien(loaiXe){
    switch (loaiXe) {
        case xeCar:
            soKmDauTien = 8000;
            break;
        case xeSuv:
            soKmDauTien = 9000;
            break;
        case xeBlack:
            soKmDauTien = 10000;
            break;       
    }
    return soKmDauTien;
}

// Tính năng số km từ 1 đến 19
function giaTienSoKmTu1Den19(loaiXe){
    switch (loaiXe) {
        case xeCar:
            soKmTu1Den19 = 7500;
            break;
        case xeSuv:
            soKmTu1Den19 = 8500;
            break;
        case xeBlack:
            soKmTu1Den19 = 9500;
            break;   
    }
    return soKmTu1Den19;
} 

// Tính năng số km trên 19
function giaTienSoKmTren19 (loaiXe){
    switch (loaiXe) {
        case xeCar:
            soKmTren19 = 7000;
            break;
        case xeSuv:
            soKmTren19 = 8000;
            break;
        case xeBlack:
            soKmTren19 = 9000;
            break;        
    }
    return soKmTren19;
}


// onlick đến In Hoá đơn
document.getElementById("nutInHoaDon").onclick = function () {
    var loaiXe = document.querySelector("input[name='selector']:checked").value;
    console.log(loaiXe);

    var soKm = document.getElementById("txt-km").value*1;
    console.log(soKm)

    var soThoiGianCho = document.getElementById("txt-thoiGianCho").value*1;
    console.log(soThoiGianCho)

    // Số KM đầu tiên 
    var soKmDauTien = giaTienSoKmDauTien(loaiXe);

    // Số KM từ 1 đến 19
    var soKmTu1Den19 =  giaTienSoKmTu1Den19(loaiXe);

    // Số KM trên 19
    var soKmTren19 = giaTienSoKmTren19 (loaiXe);

    console.log(soKmDauTien)
    console.log(soKmTu1Den19)
    console.log(soKmTren19)

    // Công thức tính tiềN
    var tongTien = 0;

    if(soKm <= 1){
        tongTien = soKm * soKmDauTien
    }
    else if(1 < soKm && soKm <= 19){
        tongTien =  soKmDauTien + (soKm - 1) * soKmTu1Den19
    }
    else{
        tongTien = soKmDauTien + 18 * soKmTu1Den19 + ( soKm- 19 ) * soKmTren19
    }
    console.log(tongTien);  

    // document.getElementById("divThanhTien").style.display = "block";
    // In Hoá đơn Số Km đầu tiên
    // document.getElementById("soKm").innerHTML= inSoKmDauTien;

    document.getElementById("tongTienCuaHoaDon").innerHTML = tongTien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

