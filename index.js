const getMsgFromOnePayResCode = (resCode) => {
        switch (resCode) {
            case '0':
                return 'Giao dịch thành công.';
            case '1':
                return 'Ngân hàng từ chối cấp phép giao dịch.';
            case '2':
                return 'Ngân hàng phát hành thẻ từ chối cấp phép giao dịch.';
            case '3':
                return 'Không nhận được kết quả phản hồi từ Tổ chức phát hành thẻ.';
            case '4':
                return 'Tháng/Năm hết hạn của thẻ không đúng hoặc thẻ đã hết hạn sử dụng.';
            case '5':
                return 'Số dư/Hạn mức của thẻ không đủ để thanh toán.';
            case '6':
                return 'Không nhận được kết quả phản hồi từ Tổ chức phát hành thẻ.';
            case '7':
                return 'Lỗi trong quá trình xử lý giao dịch của Ngân hàng.';
            case '8': 
                return 'Ngân hàng phát hành thẻ không hỗ trợ thanh toán trực tuyến.';
            case '9':
                return 'Tên chủ thẻ/tài khoản không hợp lệ.';
            case '10':
                return 'Thẻ hết hạn/Thẻ bị khóa.';
            case '11':
                return 'Thẻ/Tài khoản chưa đăng ký dịch vụ hỗ trợ thanh toán trực tuyến.';
            case '12':
                return 'Tháng/Năm phát hành hoặc hết hạn của thẻ không hợp lệ.';
            case '13':
                return 'Giao dịch vượt quá hạn mức thanh toán trực tuyến theo quy định của Ngân hàng.';
            case '14': 
                return 'Số thẻ không hợp lệ.';
            case '21':
                return 'Số dư tài khoản không đủ để thanh toán.';
            case '22':
                return 'Thông tin tài khoản không hợp lệ.';
            case '23':
                return 'Thẻ/Tài khoản bị khóa hoặc chưa được kích hoạt.';
            case '24':
                return 'Thông tin thẻ/tài khoản không hợp lệ.';
            case '25':
                return 'Mã xác thực OTP không hợp lệ.';
            case '26':
                return 'Mã xác thực OTP đã hết hiệu lực.';
            case '98':
                return 'Xác thực giao dịch bị hủy.';
            case '99':
                return 'Người dùng hủy giao dịch.';
            case 'B':
                return 'Lỗi trong quá trình xác thực giao dịch của Ngân hàng phát hành thẻ.';
            case 'D':
                return 'Lỗi trong quá trình xác thực giao dịch của Ngân hàng phát hành thẻ.';
            case 'F':
                return 'Xác thực giao dịch không thành công.';
            case 'U':
                return 'Xác thực mã CSC không thành công.';
            case 'Z':
                return 'Giao dịch bị từ chối.';
            case '253':
                return 'Hết thời hạn nhập thông tin thanh toán.';
            default:
                return 'Lỗi không xác định';
        }
    };
