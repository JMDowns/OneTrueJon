import { injectable } from 'tsyringe';
import { User } from "./user";

@injectable()
export class UserRepository {
    constructor() {
        
    }

    GetUsers(): User[] {
        return [
            {
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