import multer from "multer";
import { NextFunction, Request, Response } from "express";

export const verifyParam = (req: Request, res: Response, next: NextFunction) => {
  if (req.params.about === "avatar") {
    upload.single("avatar")(req, res, next);
  } else {
    next();
  }
};

const upload = multer({ storage: multer.memoryStorage() });

export default upload;
