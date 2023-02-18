import { MYAXIOIS } from "./helper";

export const loadAllCategories = () =>
{
    return MYAXIOIS.get('/categories/').then(responce =>{ // This is callback funtion
        return responce.data;
        
    })
}