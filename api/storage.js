import SecureStore from "expo-secure-store"
const storeToken = async(token)=>{
    try {
        await SecureStore.setItemAsync("token",token)
    } catch (error) {
        console.log(error)
    }
}

const getToken = async()=>{
    try {
        const token = await SecureStore.getItemAsync("token")
        return token
    } catch (error) {
        console.log(error)
    }
}

const deleteToken = async()=>{
    try {
        await SecureStore.deleteItemAsync("token")
    } catch (error) {
        console.log(error)
    }
}

export {storeToken,getToken,deleteToken}
