import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Input } from "./Input";

describe('test_Input', () => {
    it('test_1: сравнение с снимком', () => {
        const { asFragment } = render(<Input />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('test_2: renders 1', () => {
        render(<Input />);
        fireEvent.change(screen.getByRole("textbox"), {
            target: { value: "Privet" },
        });
    });

    it("test_3: renders 2", () => {
        render(<Input />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it('test_4: вызов callback-a', () => {
        const onChange = jest.fn()
        render(<Input value="" onChange={onChange} />);
        fireEvent.change(screen.getByRole("textbox"), {
            target: { value: "JavaScript" },
        });
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it("test_5: наличие PlaceholderTexе", () => {
        render(<Input />);
        expect(screen.getByPlaceholderText("Your message...")).toBeInTheDocument();
    });
})