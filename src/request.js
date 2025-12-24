export const request =async (url)=>{
    try{
        const req=await fetch(url);
        const data=await req.json();
        return data;
    }catch{
        console.log("Something went wrong")
    }
}