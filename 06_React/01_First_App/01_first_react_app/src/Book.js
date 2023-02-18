// import { useState } from "react";

// // 
// function Click()
// {
//     var [count, setCount] = useState(0);

//     return (<div>
//                 <p>You have Clicked {count} times</p>
//                 <button onClick={() =>{setCount(count + 1)}}>Click Click</button>
//             </div>);
// }

// export default Click;

// ----------------------------------------------------------------------------

// import { useState } from "react";

// function Book() {
//     var [bookDetails, setBookDetails] = useState({
//         bookName: "Abc",
//         bookAuthor: "xyz"
//     });


//     var Change = () => {
//         var copyBookDetails = { ...bookDetails, bookName: "pqr" }
//         setBookDetails(copyBookDetails);

//     }

//     return (<div>
//         Name : {bookDetails.bookName}
//         <br></br>
//         Author : {bookDetails.bookAuthor}
//         <br></br>
//         <button onClick={Change}> Change Book Name</button>
//     </div>);
// }

// export default Book



// -----------------------------------------------------------------------------------


// import { useState } from "react";

// function Book() {
//     var [books, setBookDetails] = useState([
//         { id: 11, bookName: "Let US C", bookAuthor: "Kanitkar" },
//         { id: 12, bookName: "Let US CPP", bookAuthor: "Kanitkar" },
//         { id: 13, bookName: "Let US OS", bookAuthor: "ABC" },
//         { id: 14, bookName: "Let US Java", bookAuthor: "PQR" },
//         { id: 15, bookName: "Let US MERN", bookAuthor: "XYZ" },
//         { id: 16, bookName: "Let US DB", bookAuthor: "UVW" }
//     ]);

//     var Add=() =>{
//         var copyOfBooks = [...books];
//         copyOfBooks.push({id: 17, bookName: "ABCD", bookAuthor: "XYZ"});
//         setBookDetails(copyOfBooks);
//     }

//     return(<div>
//         {
//             books.map(book =>{
//                 return <h2 key={book.id}>
//                     {book.id + book.bookName + book.bookAuthor }
//                 </h2>
//             })
    
//         }
//         <button onClick={Add}>Add</button>
//     </div>);
// }

// export default Book;


// ------------------------------------------------------------------------

import { useEffect, useState } from "react";

function Book()
{
     var [bookName,setBookName] = useState("Let us C");
    // var [author,setAuthor] = useState("");

    useEffect(()=>  {
                        //some code here
                        //debugger;
                        console.log("aka Component Did Mount")
                    },[])
                    
    useEffect(()=>  {
                        //some code here
                        //debugger;
                        console.log("aka Component Did Update: BookName")
                    },[bookName])

    // useEffect(()=>  {
    //                     //some code here
    //                     //debugger;
    //                     console.log("aka Component Did Update: Author")
    //                 },[author])

    // useEffect(()=>  {
    //                     //some code here
    //                     //debugger;
    //                     console.log("aka Component Did Update: BookName or Author")
    //                 },[bookName, author])


    var Change =()=>
    {
        setBookName("Let us not c");
       
    }
    return <div>
                Name: {bookName}
                <br></br>
                <button onClick={Change}>Change Book Name</button>
           </div>
}

export default Book;
