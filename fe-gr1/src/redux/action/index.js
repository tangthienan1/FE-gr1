//Create function to return actoin
/**Return   type:type
 *          payload:payload
 */
const createAction = (type,payload) =>{
    return {
        type: type,
        payload: payload
    }
}
export default createAction;