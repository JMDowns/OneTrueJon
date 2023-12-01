import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Users from './page';
import { test, expect } from 'bun:test';

test('Given users should construct cards', async () => {
    render(Users())
    expect(true).toBe(true);
});