const Person = ({person}) => {
    return (
    <div>
        <div>FirstName : {person.firstname}</div>
        <div>LastName : {person.lastname}</div>
        <div>Email : {person.email}</div>
        <div>Password : {person.password}</div>
    </div>
    )
}

export default Person