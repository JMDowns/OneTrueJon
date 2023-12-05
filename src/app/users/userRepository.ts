import 'reflect-metadata';

import { injectable } from 'tsyringe';
import { User } from "./user";

@injectable()
export class UserRepository {
    constructor() {
        
    }

    GetUsers(): User[] {
        return [
            {
                userId: 1,
                name: "Jonathan Downs",
                imageLink: "/images/jon.jpg",
                profession: "Software Engineering",
                hobbies: [
                    "Programming",
                    "Reading",
                    "Video Games"
                ]
            } as User,
            {
                userId: 2,
                name: "Joobnoobthoobn Doobwns",
                imageLink: "/images/jon.jpg",
                profession: "Soobftwoobroob Oobngoobnooboobroobng",
                hobbies: [
                    "Prooobgroobmmoobng",
                    "Rooboobdoobng",
                    "Voobdooboob Goobmoobs"
                ]
            } as User
        ]
    }
}