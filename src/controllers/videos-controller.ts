// import {request, response}
import {IncomingMessage, ServerResponse} from 'http'
import { serviceListVideos } from '../services/list-videos-service'
import { serviceFilterVideos } from '../services/filter-videos-service';
import { ContentType } from '../utils/content-type';
import { VideoTransferModel } from '../models/video-transfer-model';
import { serviceResultsVideos } from '../services/results-videos-service';
import { writeRepositoryVideos } from '../repositories/videos-repositories';

export const getListVideos = async (
    request: IncomingMessage,
    response: ServerResponse
) => {
    const content: VideoTransferModel = await serviceListVideos()

    response.writeHead(content.statusCode, {"content-type": ContentType.JSON});
    response.write(JSON.stringify(content.body))
    response.end()
}

export const getFilterVideos = async (
    request: IncomingMessage,
    response: ServerResponse
) => {
    const content: VideoTransferModel = await serviceFilterVideos(request.url)

    response.writeHead(content.statusCode, {"content-type": ContentType.JSON});
    response.write(JSON.stringify(content.body))
    response.end()
}

export const getResultsVideos = async (
    request: IncomingMessage,
    response: ServerResponse
) => {
    const content: VideoTransferModel = await serviceResultsVideos("Minecrat julian minegirl");
    writeRepositoryVideos(content.body)

    response.writeHead(content.statusCode, {"content-type": ContentType.JSON});
    response.write(JSON.stringify(content.body));
    response.end();
}