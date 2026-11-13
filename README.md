# JavaScript Roadmap — Teaching Edition

A practical, instructor-led JavaScript curriculum built around the original day-by-day lessons and projects in this repository.

This repository has been used to teach JavaScript in real classes. The goal of the documentation upgrade is to make the material easier to teach, easier to revise, and more useful to learners who revisit it after class.

## How to use this repository

1. Start with [the teaching guide](docs/TEACHING-STANDARD.md). It explains the lesson format, classroom workflow, and quality expectations.
2. Follow the lessons in [the curriculum](docs/lessons/README.md).
3. Open the matching original folder when a lesson asks you to run or extend an existing practical.
4. Complete the exercises before reading any suggested solution.
5. Use the browser developer console and Node.js to test small JavaScript examples.

## Curriculum

| Lesson | Focus | Existing practical |
|---|---|---|
| 01 | JavaScript foundations, script loading, variables, data types | `day1js/` |
| 02 | Operators, decisions, functions, arrays and objects | `day2js/` |
| 03 | DOM, events, rendering lists and browser storage | `day3Js/` |
| 04 | Organising a product interface with reusable data and UI logic | `day4js/` |
| 05 | Forms, validation, browser storage and authentication concepts | `day5/authentication/` |
| 06 | Synchronous vs asynchronous JavaScript, callbacks, promises and async/await | `day6js/` |
| 07 | Scope and closures through a private account balance | `day7js/` |
| 08 | Destructuring, rest/spread and consuming an API | `day8js/` |

The lesson notes provide a coherent teaching path. Some original practical files are intentionally retained as historical classroom material; see the teaching guide before using them as production examples.

## Requirements

- A modern browser (Chrome, Firefox, Edge or Safari).
- A code editor.
- Node.js LTS for running JavaScript outside the browser and using the terminal.
- A local static server for browser projects that use modules or network requests. VS Code Live Server is one option.

## Important safety note

The authentication practical is a front-end learning demonstration. Storing passwords in `localStorage` is not secure and must never be used for a real authentication system. Real applications authenticate through a trusted server and store password hashes using established password-hashing algorithms.

## Documentation

- [Teaching standard and instructor workflow](docs/TEACHING-STANDARD.md)
- [Lesson index and learning outcomes](docs/lessons/README.md)
- [Lesson 01 — Foundations](docs/lessons/01-javascript-foundations.md)
- [Lesson 02 — Operators, functions and collections](docs/lessons/02-operators-functions-and-collections.md)
- [Lesson 03 — DOM, events and browser storage](docs/lessons/03-dom-events-and-storage.md)
- [Lesson 04 — Building a data-driven interface](docs/lessons/04-data-driven-interfaces.md)
- [Lesson 05 — Forms and validation](docs/lessons/05-forms-and-validation.md)
- [Lesson 06 — Asynchronous JavaScript](docs/lessons/06-asynchronous-javascript.md)
- [Lesson 07 — Scope and closures](docs/lessons/07-scope-and-closures.md)
- [Lesson 08 — Destructuring, rest/spread and APIs](docs/lessons/08-destructuring-and-apis.md)

## Contribution principle

Improve the explanation and the learning experience without casually deleting the original examples. Correct inaccurate teaching, identify incomplete exercises, and keep runnable examples small enough for a learner to understand.
