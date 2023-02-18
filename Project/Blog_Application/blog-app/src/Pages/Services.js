import Base from "../Components/Base";
import userContext from "../context/userContext";

const Service = () =>{
return(
    <userContext.Consumer>
            {
                (object) => (
                    <Base>

                        <h1>This is About Page</h1>
                        <p>We are building App JS</p>
                        <h1>Welcome : {object.user.login && object.user.data.name}</h1>

                    </Base>
                )
            }
        </userContext.Consumer>
);

}
export default Service;
