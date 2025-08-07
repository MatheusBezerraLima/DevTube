// Impotanto do FIleSystem (Serve para ler e escrever arquivos de sistema)
import fs from "fs";
// Path usado para achar o caminho de arquivos
import path from "path";
import { VideoModel } from "../models/video-model";
import { VideoTransferModel } from "../models/video-transfer-model";

// Pegando *DINÃMICAMENTE* o caminho do arquivo que vai ser lido
const pathData = path.join(__dirname, "../repositories/videos.json");

export const repositoryVideos = async (
  canalName?: String,
  videoName?: String,
  techName?: String,
  category?: String
): Promise<VideoModel[]> => {
    
  //lendo o arquivo encontrado pelo PATH
  const rawData = fs.readFileSync(pathData, "utf-8");
  let jsonFile = JSON.parse(rawData);

  if (canalName) {
    jsonFile = jsonFile.filter(
      (video: VideoModel) => video.canalName === canalName
    );
  }

  if (videoName) {
    jsonFile = jsonFile.filter(
      (video: VideoModel) => video.videoName === videoName
    );
  }

  if (techName) {
    jsonFile = jsonFile.filter(
      (video: VideoModel) => video.techName === techName
    );
  }

  if (category) {
    jsonFile = jsonFile.filter(
      (video: VideoModel) => video.category === category
    );
  }

  return jsonFile;
};


export const writeRepositoryVideos = async (contentJson: VideoModel[] ) => {
  let content = JSON.stringify(contentJson);
  fs.promises.writeFile(pathData, content, "utf-8");
}