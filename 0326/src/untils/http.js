import axios from "axios"

export default function http(method, url, data = {}){

    let configData         = {};
    let type               = method === "get" ? "params" : "data";
    configData.method  = method;
    configData.url     = url;
    configData.timeout = 100,
    configData[type]   = data;

    return axios(configData).catch(err => {
        // if(configData.method === "put"){
        //     this.$router.push("/login");
        // }

        function status(start, end){
            for(let i = start;i <= end;i++){
                if(err.response && err.response.status === i){return alert(`${i}错误`)} 
            }
        }
        status(300, 307)
        status(400, 417)
        status(500, 505)
    })
}
