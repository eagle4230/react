import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Button } from "./Button";

describe('test_Button', () => {
    it('test_1: рендер кнопки', () => {
        render(<Button label="test" />);
    });

    it('test_2: сравнение с снимком', () => {
        const { asFragment } = render(<Button label="test" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('test_3: поиск текста в рендере', () => {
        render(<Button label="test" />);
        expect(screen.getByText(/test/)).toBeInTheDocument();
    });
})