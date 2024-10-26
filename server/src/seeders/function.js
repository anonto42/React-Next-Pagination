import { faker } from "@faker-js/faker"
import { UserModel } from './../models/user.model.js';

export const createUser = async ( numUser ) => {
    try {
        
        const userPromise = [];

        for( let i = 0; i< numUser ; i++){
            const tempUser = UserModel.create({
                name: faker.person.fullName(),
                userName:faker.internet.userName(),
                bio:faker.lorem.sentence(10),
                password:"password",
                avatar:{
                    url:faker.image.avatar(),
                    public_id:faker.system.fileName()
                }
            })
            userPromise.push(tempUser);
        }

        await Promise.all(userPromise);

        console.log("Users created " , numUser);

        process.exit(1);

    } catch (error) {
        console.log(error.message);
    }
}


export const deleteFilesFromCloudinary = async (public_ids) => {
    try {
        
    } catch (error) {
        console.log(error.message)
    }
}