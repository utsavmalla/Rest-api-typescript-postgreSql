import { body, param } from "express-validator";

class StudentValidator {
    checkCreateStudent() {
        return [
            body("id").optional().isUUID(4).withMessage("The value should be UUID v4"),
            body("firstname")
                .notEmpty()
                .withMessage("The firstname should not be empty"),
            body("lastname")
                .notEmpty()
                .withMessage("The lastname should not be empty"),
        ];
    }

    checkIdParam(){
        return [
            param('id')
            .notEmpty()
            .withMessage('The value should be not empty')
            .isUUID(4)
            .withMessage('The value should be uuid v4'),
        ]
    }
}

export default new StudentValidator();