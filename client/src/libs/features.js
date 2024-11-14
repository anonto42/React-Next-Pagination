import moment from "moment";

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


export const last7Days = () =>{
    const currentDate = moment()
    const Days = []
    for( let i = 0; i < 7; i++ ) {
       const dayDate = currentDate.clone().subtract(i,"days");
       const dayName = dayDate.format("dddd")

       Days.unshift(dayName)
    }
    return Days.reverse()
}