export default function QR({ id }) {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=` + id;

  return (
    <div>
      <img src={url} alt="qrcode" />
    </div>
  )
}
