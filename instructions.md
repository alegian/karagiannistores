# Karagianni Stores Dev Guidelines

## Introduction

Karagianni Stores is a men’s clothing shop located in the center of Patras, Greece. With over 40 years of history, we are committed to offering carefully selected, high-quality clothing at attractive prices.

This codebase powers the official website for Karagianni Stores. The site should feel polished, professional, and modern, while clearly providing the information a potential customer may want before visiting in person. It is not an e-commerce platform and does not support online transactions. Instead, it serves as a landing page that encourages customers to visit the store, call, or get in touch via email.

## Technicals

This codebase uses Typescript, Next.js, Tailwind v4, and HeroUI for components.

You can find HeroUI's full documentation here: https://v3.heroui.com/react/llms-full.txt

Always use the design system variables & utilities from globals.css, and only use 1-time tailwind classes as a last resort.
Always prefer ready-to-use HeroUI components, and don't reinvent the wheel.

Clean, readable code & type safety are priorities, but don't oversimplify.
Constantly review yourself for repeating code patterns and refactor them.
