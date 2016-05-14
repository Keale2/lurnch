export default function getData(url, success) {
    let httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('UR BROWSER BROKE');
      return false;
    }

    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                success(JSON.parse(httpRequest.responseText));
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
    
    httpRequest.open('GET', url);
    httpRequest.send();
}