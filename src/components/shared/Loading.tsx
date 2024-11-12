import React, {useState} from "react";


const Loading: React.FC<any> = ({loading}) => {
    const [isLoading, setLoading] = useState<boolean>(loading);
   
    return (<div className="flex-container"><div className="loader"></div> </div>)
}
export default Loading;