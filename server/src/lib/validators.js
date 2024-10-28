import { body , validationResult } from "express-validator";


export const registerValidator = () => {
    body(["name", "userName" , "password", "bio"]).notEmpty()
}

export const validate = ( req , res , next ) => {

    const errors = validationResult(req);

    console.log(errors)

    if (errors.isEmpty()) return next();

}