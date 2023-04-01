import axios from 'axios';

export default function QR({ id }) {
    const options = {
        method: 'POST',
        url: 'https://qrcode3.p.rapidapi.com/qrcode/text',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'e158915f92msha6ca60d3b705294p1389a9jsnf4b39e49f18c',
          'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
        },
        data: `{"data":${id},"image":{"uri":"icon://appstore","modules":true},"style":{"module":{"color":"black","shape":"default"},"inner_eye":{"shape":"default"},"outer_eye":{"shape":"default"},"background":{}},"size":{"width":200,"quiet_zone":4,"error_correction":"M"},"output":{"filename":"qrcode","format":"png"}}`
      };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

  return (
    <div>QR</div>
  )
}
