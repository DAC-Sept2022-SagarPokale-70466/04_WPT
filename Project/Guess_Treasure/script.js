var find = Math.floor(Math.random() * 10);
console.log(find);
var count = 0;
var found = false;


function check(index) {


    if (count < 1 && !found) {

        if(document.getElementById(index).id != find){
            count++;
            document.getElementById(index).style.backgroundColor = 'Found';
            document.getElementById(index).innerText = 'Not Found';
        }

        if (document.getElementById(index).id == find) {

            found = true;
            document.getElementById(index).className = 'red';
            document.getElementById(index).innerText = 'Found';
        }


    }

    else{
        document.getElementById(index).className = 'invisible';

        document.getElementById("notFound").innerText = "Limit Exceeded"

    }

}



