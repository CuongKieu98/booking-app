import "../../Stylesheets/components/mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mail-title">Tiết kiệm thời gian và tiền bạc!</h1>
        <span className="mail-desc">Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</span>
        <div className="mail-input-container">
            <input type="text" placeholder="Địa chỉ e-mail của bạn" />
            <button>Đăng ký</button>
        </div>
    </div>
  )
}

export default MailList