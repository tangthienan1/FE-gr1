//authenticate by token
export const authenticate = () =>{
    const token = localStorage.getItem('token')
    if(token !== "undefined" && token !== null){
        return
    }else return false;
}