const { useEffect } = require("react")

const useTitle = title =>{
    useEffect(()=>{
        document.title= `${title}- Smile Seekers`
    },[title])

};
export default useTitle;