function myAxios() {

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    
    xhr.open("GET", "https://clinicalmarkers.p.rapidapi.com/apgar?RespirationScore=%3CREQUIRED%3E&SkinColorScore=%3CREQUIRED%3E&HeartRateInBpm=%3CREQUIRED%3E&ResponseToIrritableStimuliScore=%3CREQUIRED%3E&ActivityScore=%3CREQUIRED%3E");
    xhr.setRequestHeader("X-RapidAPI-Key", "9a664f511dmshb8aecb24b796790p12bfe6jsnf158ba06ab08");
    xhr.setRequestHeader("X-RapidAPI-Host", "clinicalmarkers.p.rapidapi.com");
    
    xhr.send(data);
}
export default myAxios;