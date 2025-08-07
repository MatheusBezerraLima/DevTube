import * as http from "http";
import { getListVideos, getFilterVideos, getResultsVideos } from './controllers/videos-controller'
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
        
    // QueryString
    const baseUrl = request.url?.split("?")[0]

    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListVideos(request, response)
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.VIDEO){
        await getFilterVideos(request, response)
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.RESULTS){
        await getResultsVideos(request, response);
    }

}