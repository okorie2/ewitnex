import { useAppThunkDispatch } from "redux/store"
import { getUserById } from "redux/user/thunkAction"


export const getOrganizer = (id:string) => {
    const dispatch = useAppThunkDispatch()
    dispatch(getUserById(id)).then((data) => console.log(data))

    return "Profile"
}