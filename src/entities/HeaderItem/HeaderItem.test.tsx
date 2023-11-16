import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeaderItem } from './HeaderItem';

describe('HeaderItem Component', () => {
    test('should render HeaderItem with title', () => {
        const title = 'Test Title';

        render(<HeaderItem title={title} />);

        const headerItem = screen.getByTestId('header-item');
        const button = screen.getByText(title);

        expect(headerItem).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
});
