export const fileFormet = (url="") => {

    const fileExtention = url.split(".").pop();

    if (fileExtention === "mp4" || fileExtention === "webm" || fileExtention === "ogg") {
        return "video";
    }

    if (fileExtention === "mp3" || fileExtention === "wev") {
        return "audio";
    }

    if (fileExtention === "png" || fileExtention === "jpeg" || fileExtention === "jpg" || fileExtention === "gif") {
        return "image";
    }

    return "File";
}

export const transformImage = (url="",width = 100 ) => url