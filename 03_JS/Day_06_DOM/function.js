function validate(id, errorid, msg){

    // Validation for Name
    var txtName = document.getElementById(id);
    var errorName = document.getElementById(errorid);

    if(txtName.value != ""){
        errorName.innerText = "";
        console.log(txtName.value);
    }
    else{
        errorName.innerText = msg;
    }

}