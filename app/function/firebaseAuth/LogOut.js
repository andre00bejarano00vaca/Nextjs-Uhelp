import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
export default async function logOut(){
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error.message)
    }
}