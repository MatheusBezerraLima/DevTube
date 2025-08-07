import { VideoModel } from "./video-model";

export interface VideoTransferModel {
    statusCode: number,
    body: VideoModel[]
}