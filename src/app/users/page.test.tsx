import {render, screen, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { container } from 'tsyringe';
import Users from './page';
import { UserRepository } from './userRepository';
import { User } from './user';
import exp from 'constants';

var mockUserRepository = {
    GetUsers: jest.fn(() => {
        return [ {
            userId: 1,
            name: "Jonathan Downs",
            imageLink: "url.com",
            profession: "tester",
            hobbies: ["testing", "programming", "more testing"]
        } as User];
    })
}

jest.mock('./userRepository', () => {
    return jest.fn().mockImplementation(() => {
        return { mockUserRepository }
    });
});

describe('Users Page', () => {
    test('Given users should construct cards', async () => {
        container.registerInstance(UserRepository, mockUserRepository);
        render(Users())

        mockUserRepository.GetUsers().forEach(user => {
            var userImageElement = screen.getAllByRole('img').filter(i => i.getAttribute('src') == user.imageLink)[0];

            expect(userImageElement).toBeDefined();
            expect(userImageElement.getAttribute('alt')).toEqual(user.name);

            var { getByText } = within(screen.getByTestId(`user-card-${user.userId}`));

            var userText = getByText(`${user.name} (${user.userId})`);
            expect(userText).toBeDefined();
            var userProfession = getByText(`${user.profession}`);
            expect(userProfession).toBeDefined();
            
            user.hobbies.forEach(hobby => {
                var userHobby = getByText(`${hobby}`);
                expect(userHobby).toBeDefined();
            })
        });
    });
})

