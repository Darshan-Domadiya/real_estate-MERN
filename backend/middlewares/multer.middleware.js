import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./public/files");
  },
  filename: (req, file, cb) => {
    return cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
