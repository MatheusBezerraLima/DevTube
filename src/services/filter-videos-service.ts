import { repositoryVideos } from "../repositories/videos-repositories"
import { VideoTransferModel } from "../models/video-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterVideos = async(
    canalName?: String,
    videoName?: String,
    techName?: String, 
    category?: String
) :Promise<VideoTransferModel> => {

    // Define a interface de retorno 
    let responseFormat: VideoTransferModel = {
        statusCode: 0,
        body: []
    }

    // Busca os dados
    const queryString = canalName?.split("?v=")[1] ?? ""
    const data = await repositoryVideos(queryString);
    
    // verifica se tem conteúdo
    responseFormat= {
        statusCode:  data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
      }

    return responseFormat;
}