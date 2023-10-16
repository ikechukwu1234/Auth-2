import Instance from "./AxiosConfig";


type UserData = {
    fullName: string,
    email: string,
    password: string,
    profileImage: string
}

export const RegisterUser = async (data: UserData) => {
    try{
        const response = await Instance.post("/create-user", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return response.data
    }catch (err)
    {
        return err
    }
}

export const LoginUser = async (data: UserData) =>{
    try{
        const response = await Instance.post("/login-user", data);
        return response.data
    }catch(err)
    {
        return err
    }
}

