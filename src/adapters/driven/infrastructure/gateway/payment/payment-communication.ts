const QRCode = require('qrcode')

export const PaymentCommunication = () => {
  const generateQRCode = async () => {
    return await QRCode.toDataURL(
      `https://postech.fiap.com.br/curso/software-architecture/`
    )
  }

  return generateQRCode
}
