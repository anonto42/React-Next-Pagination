import { body , check, validationResult } from "express-validator";

export const registerValidator = () => [
    body("name", "Please Enter Name").notEmpty(),
    body("userName", "Please Enter UserName").notEmpty(),
    body("bio", "Please Enter Bio").notEmpty(),
    body("Password", "Please Enter Password").notEmpty(),
    check("avatar", "Please Upload Avatar").notEmpty()
]

export const validate = ( req , res , next ) => {

    const errors = validationResult(req);

    const errorMessages = errors.array().map(err => err.msg).join(', ');

    console.log(errorMessages)

    if (errors.isEmpty()) return next();
    else return res.status(400).json({ error: errorMessages });

}

export const loginValidator = () => [
    body("userName", "Please Enter UserName").notEmpty(),
    body("password", "Please Enter Password").notEmpty()
]

export const newGroupValidatior = () => [
    body("name", "please enter name").notEmpty(),
    body("members")
    .notEmpty()
    .withMessage("Please enter members")
    .isArray({min:2 , max:100})
    .withMessage("Members must be 2-100")
]