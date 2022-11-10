import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - Photo`;
    },[title])
}

export default useTitle;