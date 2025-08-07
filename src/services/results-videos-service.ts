import { StatusCode } from "../utils/status-code";
import { VideoTransferModel } from "../models/video-transfer-model";
import { error } from "console";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const BASE_URL = 'https://www.googleapis.com/youtube/v3'

export const serviceResultsVideos = async(query: string) => {

    let responseFormat: VideoTransferModel = {
        statusCode: 0,
        body: [],
      };

    const url = new URL(`${BASE_URL}/search`);
    url.searchParams.set('part', 'snippet');
    url.searchParams.set('q', query);
    url.searchParams.set('key', YOUTUBE_API_KEY!);
    url.searchParams.set('maxResults', '5');
    url.searchParams.set('type', 'video');

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Erro HTTP:${response.status}`); 
        }

        const data = await response.json();

        responseFormat= {
            statusCode: !data.items || data.items.length === 0 ? StatusCode.NO_CONTENT : StatusCode.OK,
            body: data.items 
        };

        return responseFormat;
    }catch (err) {
        console.error('Erro ao buscar vídeos:', err);
        return responseFormat={
            statusCode: StatusCode.BAD_REQUEST,
            body: []
        };
    }
    

}