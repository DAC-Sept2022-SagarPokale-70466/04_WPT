function getDataFromServer(){

    var refToMyContainer = document.getElementById("myContainer");

    var helperCallServer = new XMLHttpRequest();
    // helperCallServer.state = 0 Initial start position

    helperCallServer.onreadystatechange = () => {
        // This function will be get called when readyState is 0,1,2,3,4

        debugger;

        if((helperCallServer.readyState == 4) && (helperCallServer.status == 200)){

                var responseReceived = helperCallServer.responseText;
                // Convert the Response into JSON string
                // helperToCallServer.responseText
                // '{"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}'

                var responseInJSON = JSON.parse(responseReceived);
                // Converting JSON String into JS string

                var  people = responseInJSON.data;
                // Getting all data in People array

                for(i = 0; i < people.length; i++){

                    var person = people[i];

                    var content = `<div id = "${person.id}" class = "contentDiv">
                                        <img src = "${person.avatar}" class = "contentImage">
                                            <h2>${person.first_name} ${person.last_name}
                                                <h3>${person.email}</h3>
                                    </div>`;

                    

                    refToMyContainer.innerHTML = refToMyContainer.innerHTML + content;
                    // Appendind the Div tag
                }

            
        }

        
        
    }
    
    
    helperCallServer.open("GET","https://reqres.in/api/users");
        //        helperToCallServer.readyState = 1 ..packet created

    helperCallServer.send();
            //  helperToCallServer.readyState = 2 ..packet sent
            //  helperToCallServer.readyState = 3 ..waiting for reply.
            //  helperToCallServer.readyState = 4 ..reply received
            //  helperToCallServer.status = 200 ..packet has success response
    


}