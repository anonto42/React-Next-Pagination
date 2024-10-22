import { faker } from "@faker-js/faker"
import { UserModel } from './../models/user.model.js';

const createUser = async ( numUser ) => {
    try {
        
        const userPromise = [];

        for( let i = 0; i< numUser ; i++){
            const tempUser = UserModel.create({
                name: faker.person.fullName(),
                userName:faker.internet.userName(),
                
            })
            userPromise.push()
        }

    } catch (error) {
        console.log(error.message);
    }
}