import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

function Meals() {
    var [meal, setMeal] = useState([])
    var [search, setSearch] = useState("");
    var [addMeal, setAddMeal] = useState({ idCategory: 0, strCategory: "", strCategoryThumb: "", strCategoryDescription: "" })
    var history = useHistory();

    var [userName, setuserName] = useState("");
    //{"categories":[{"idCategory":  ,"strCategory":,"strCategoryThumb": ,"strCategoryDescription":
    // ------------------------------------------------------------------------

    useEffect(()=>{
        setuserName(sessionStorage.getItem("userName"));
    },[])

    useEffect(() => {     // Load Once
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                // debugger
                var result = JSON.parse(helper.responseText);
                setMeal(result.categories);
            }
        }

        helper.open("GET", "https://www.themealdb.com/api/json/v1/1/categories.php");
        helper.send();
    }, []);        // will at starting

    // -------------------------------------------------------------------

    var Remove = (mealNo) => {
        var filterMeal = meal.filter((myMeal) => {
            return (myMeal.idCategory != mealNo)
        })
        setMeal(filterMeal);

    }

    // --------------------------------------------------------------------

    var Seach = (arg) => {// arg is bydefault send by react
        setSearch(arg.target.value);
    }
    // --------------------------------------------------------------------

    var Clear = () => {
        setSearch("")
    }
    // --------------------------------------------------------------------

    var HandleChange = (arg) => {
        var copyOfMeal = { ...addMeal };
        copyOfMeal[arg.target.name] = arg.target.value
        console.log(arg.target.name)
        setAddMeal(copyOfMeal);
    }

    // --------------------------------------------------------------------

    var Add = () => {
        var copyOfAllMeals = [...meal];
        copyOfAllMeals.push(addMeal)
        setMeal(copyOfAllMeals);
        setAddMeal({ idCategory: 0, strCategory: "", strCategoryThumb: "", strCategoryDescription: "" });
    }

    // --------------------------------------------------------------------

    var Logout=()=>{
        sessionStorage.removeItem('isLoggedIn')
        sessionStorage.removeItem('userName')
        history.push("/dashboard")
    }

    // --------------------------------------------------------------------

    return (
        <div className='table-responsive'>
            <div style={{ float: "right" }}>
                Welcome {" "} {userName} {" "}
                <br></br>
                <button className='btn btn-primary'
                    onClick={Logout}>
                    Log out
                </button>
            </div>
            <div className="table-responsive container">
                <div>
                    <center>Welcome Here are Your Meals Options</center>
                </div>
                <div>
                    <center>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Category No : </td>
                                    <td><input type={"text"} name="idCategory" value={addMeal.idCategory} onChange={HandleChange}></input></td>
                                    {/* {addMeal.idCategory} */}
                                </tr>

                                <tr>
                                    <td>Category : </td>
                                    <td><input type={"text"} name="strCategory" value={addMeal.strCategory} onChange={HandleChange}></input></td>
                                </tr>

                                <tr>
                                    <td>Image : </td>
                                    <td><input type={"text"} name="strCategoryThumb" value={addMeal.strCategoryThumb} onChange={HandleChange}></input></td>
                                </tr>

                                <tr>
                                    <td>Description : </td>
                                    <td><input type={"text"} name="strCategoryDescription" value={addMeal.strCategoryDescription} onChange={HandleChange}></input></td>
                                </tr>

                                <tr>
                                    <center>
                                        <button className="btn btn-primary" onClick={Add}>Add Meal</button>
                                    </center>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
                <div className="">
                    Seach by Name : <input type={"text"}
                        value={search}
                        onChange={Seach}></input>{"  "}
                    <button onClick={Clear} className='btn btn-info'>Clear</button>
                </div>
                <div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Catogories</td>
                                <td>Type Of Categories</td>
                                <td>Meal Image</td>
                                <td>Mels Description</td>
                                <td>Action</td>
                            </tr>
                            {meal.map((myMeals) => {
                                // debugger;
                                if (myMeals.strCategory.toLowerCase().includes(search.toLocaleLowerCase())) {
                                    return (
                                        <tr key={myMeals.idCategory}>
                                            <td>{myMeals.idCategory}</td>
                                            <td>{myMeals.strCategory}</td>
                                            <td><img src={myMeals.strCategoryThumb}></img></td>
                                            <td>{myMeals.strCategoryDescription}</td>
                                            <td className="align-middle btn btn-danger" onClick={() => { Remove(myMeals.idCategory) }}>Delete</td>
                                        </tr>)
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>);

}
export default Meals;