import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import WebsiteLayout from "./websiteLayout";

const mockRouter = {
  push: jest.fn()
};

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => { return mockRouter; })
}))

describe('Given WebsiteLayout', () => {
    [
      {name: "Users", url: "/users"},
      {name: "Etymology", url: "/etymology"},
      {name: "Home", url: "/home"},
    ].forEach(({name, url}) => 
      test(`given user clicks on ${name} button should redirect to ${url}`, async () => {
        const user = userEvent.setup()

        render(WebsiteLayout( {children: null} ));
    
        const element = screen.getByRole('button', {name: name});

        expect(element).toBeDefined();
        
        await user.click(element);

        expect(mockRouter.push).toHaveBeenCalledWith(url)
      })
    );
    
});
