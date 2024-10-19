import multer from "multer";

export const multerUpload = multer(
    {
        limits: {
            fileSize: 1024 * 1024 * 5
        }
    }
);

export const singleAvatarUpload = multerUpload.single("avatar");