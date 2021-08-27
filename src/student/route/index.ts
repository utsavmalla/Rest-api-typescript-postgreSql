import express from "express";


import StudentValidator from "../validator/index"
import Middleware from "../../middleware/index"
import StudentController from "../controller";

const router = express.Router();

router.post(
    "/create",
    StudentValidator.checkCreateStudent(),
    Middleware.handleValidationError,
    StudentController.create
);


router.get("/view",
    StudentValidator.checkCreateStudent(),
    Middleware.handleValidationError,
    StudentController.view
);

router.get(
    "/view/:id",
    StudentValidator.checkIdParam(),
    Middleware.handleValidationError,
    StudentController.viewById
);

router.put(
    "/update/:id",
    StudentValidator.checkIdParam(),
    Middleware.handleValidationError,
    StudentController.updateByID
    );

router.delete(
    "/delete/:id",
    StudentValidator.checkIdParam(),
    Middleware.handleValidationError,
    StudentController.delete
    );

export default router;
