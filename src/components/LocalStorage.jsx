import mockData from "../data/mockData";

export function LocalStorage(){

    const storedData = localStorage.getItem("mockData");
    
    // VALIDAR SI EXISTE UN LOCALSTORAGE
    if(storedData){
        return JSON.parse(storedData);
    }

    //GUARDAR DATOS EN LOCALSTORAGE
    localStorage.setItem("mockData", JSON.stringify(mockData));
    return mockData

}