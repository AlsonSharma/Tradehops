import React from 'react'
import {render, screen} from "@testing-library/react";
import { describe, test, expect } from 'vitest';
import Hero from "../LandingPage/Home/Hero";


describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
    test("renders signup button", () => {
        render(<Hero/>);
        const signupButton = screen.getByRole("button", {name: "Sign up for free"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});


