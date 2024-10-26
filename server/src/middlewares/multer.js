import multer from "multer";


const storage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
            cb(null, "./public/temp");
        },
        filename: function (req, file, cb) {
            cb(null,file.originalname);
        }
    }
)

export const multerUpload = multer(
    {
        storage
    }
);

export const singleAvatarUpload = multerUpload.single("avatar");

export const attachmentsMulter = multerUpload.array("files",5);