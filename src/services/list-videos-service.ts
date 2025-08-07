import { VideoTransferModel } from "../models/video-transfer-model";
import { repositoryVideos } from "../repositories/videos-repositories";
import { StatusCode } from "../utils/status-code";

export const serviceListVideos = async () => {
  
  let responseFormat: VideoTransferModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryVideos();

  responseFormat= {
    statusCode:  data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data
  }

  return responseFormat;
};
