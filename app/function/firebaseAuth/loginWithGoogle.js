import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/app/firebase";
async function loginWithGooble() {
    try {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
    } catch (error) {
        console.log(error.message)
    }
}

export default loginWithGooble