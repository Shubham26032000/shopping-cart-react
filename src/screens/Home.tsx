import { useEffect } from "react"


export const Home = () => {


    useEffect(() => {
        console.log("Home Component while Rendering...")
    })


    useEffect(() => {
        console.log("AFter RENDER.")
    }, [])


    useEffect(() => {
        let msg = "Home"


        return () => console.log("Before Destroying... ", msg)


    }, [])


    return <>
        <h1>Welcome to My Shopping App</h1>
    </>
}
