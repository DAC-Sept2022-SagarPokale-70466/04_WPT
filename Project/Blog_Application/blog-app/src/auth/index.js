// doLogin => data=>set to localstorage

export const doLogin = (data, next) => {
    console.log("Here in Auth ")
    localStorage.setItem('data', JSON.stringify(data))  // Convert to string and save
    next(); // callBack Functioin 
}

// Check isLoggedIn
export const isLoggedIn = () => {
    let data = localStorage.getItem("data");
    if (data == null) {
        return false;
    }
    else {
        return true;
    }
}


// doLogout => data=>remove to localstorage

export const doLogout = (next) => {
    localStorage.removeItem("data")
    next();
    // next become callback function
}

// Get Current User

export const getCurrentUserDetail = () => {
    if (isLoggedIn()) {
        return JSON.parse(localStorage.getItem("data")).user;
        // String to JSON conversion
    }
    else {
        return undefined;
    }
}

export const getToken = () => {
    if (isLoggedIn()) {
        return JSON.parse(localStorage.getItem('data')).token;
    } else {
        return null;
    }
}