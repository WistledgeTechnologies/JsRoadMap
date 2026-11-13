# JavaScript Roadmap — Teaching Standard

## Purpose

These notes are designed for a teacher leading beginners through JavaScript, not as a reference manual for experienced developers. A learner should be able to read a lesson after class and understand what a concept means, why it exists, when it is useful, and how to apply it.

The existing day folders contain useful classroom experiments and project work. The documentation layer adds consistent explanations and a clearer progression without pretending every legacy file is production-ready.

## Required structure for every lesson

Every lesson should contain the following elements, in this order:

1. **Lesson purpose** — a short explanation of what the learner is building toward.
2. **Learning outcomes** — observable abilities, not vague goals such as "understand JavaScript".
3. **Prerequisites** — what the learner should already know.
4. **Concept explanation** — plain language first, correct technical language second.
5. **Syntax and vocabulary** — explain new terms before relying on them.
6. **Worked examples** — runnable code, expected output, and a line-by-line explanation of important parts.
7. **Common mistakes** — show the incorrect pattern, explain why it fails, then show the correction.
8. **Guided practice** — a small task completed with the instructor.
9. **Independent exercises** — tasks that require learners to apply the concept without copying the example.
10. **Review questions** — questions that test reasoning, not memorisation.
11. **Lesson recap** — the essential ideas to retain.

Where a lesson uses the browser, state which file to open, how the JavaScript file is connected, and where the learner should look for output.

## Explanation standard

- Define a concept in plain language before introducing jargon.
- Explain *why* code is written a particular way. Do not merely translate each line into English.
- Distinguish similar concepts explicitly: declaration vs assignment, `undefined` vs `null`, `==` vs `===`, array methods that mutate vs methods that return a new array, and synchronous vs asynchronous work.
- Include realistic examples such as a shopping cart, account balance, registration form, task list, or product catalogue.
- Show expected output for console examples.
- Use consistent variable names in camelCase.
- Use `const` by default; use `let` when reassignment is required. Teach `var` to explain older code and its scope behaviour, not as the default for new code.
- Prefer strict equality (`===`) and explain type coercion when showing loose equality.
- Avoid claiming that JavaScript is simply "interpreted" or "only for the browser". Explain that JavaScript engines execute the language in browsers and runtimes such as Node.js.
- Avoid describing `null` as "nothing" without qualification. It is an intentional absence of a value.
- Explain that arrays and functions are objects in the broader JavaScript type system, while `typeof null` returning `"object"` is a historical language quirk.

## Code example standard

Every substantial code sample should be:

- Complete enough to run, or clearly labelled as a fragment.
- Indented consistently with two or four spaces.
- Free from unrelated code and unexplained variables.
- Followed by expected output or a visible browser result.
- Written with meaningful names and semicolons.
- Safe to copy without accidentally executing destructive behaviour.

For browser examples, separate HTML, CSS and JavaScript when that helps the learner understand their responsibilities. Use an external script with `defer` for beginner DOM lessons:

```html
<script src="./script.js" defer></script>
```

Do not mix explanatory prose into executable JavaScript without comments. Do not put invalid snippets inside a code block presented as runnable code.

## Classroom delivery

A useful 90-minute lesson can follow this rhythm:

| Stage | Approx. time | Instructor action |
|---|---:|---|
| Recall | 5 min | Ask learners to explain the previous lesson in their own words |
| Introduce | 10 min | Explain the problem the new concept solves |
| Demonstrate | 20 min | Write and run a small example; predict output before executing |
| Guided practice | 20 min | Build a related example together |
| Independent practice | 25 min | Learners complete tasks with limited hints |
| Review | 10 min | Discuss mistakes, ask reasoning questions, assign follow-up work |

Adjust the timing to the class. Do not rush a foundational topic just to finish a folder.

## Teaching through debugging

When an example fails, teach learners to:

1. Read the exact error message.
2. Identify the file and line number.
3. Check spelling, capitalisation, brackets and quotation marks.
4. Check whether a value is the type they expect.
5. Inspect values with `console.log()` or browser DevTools.
6. Reduce the problem to the smallest reproducible example.
7. Change one thing at a time and test again.

A bug is evidence to investigate, not a reason to randomly rewrite the program.

## Accuracy and security rules

- Browser storage is not a secure database. Do not store passwords, session secrets or sensitive personal data in `localStorage`.
- Front-end validation improves user experience; server-side validation is still mandatory.
- Never teach a client-side demo as real authentication. Real password storage requires server-side password hashing and secure session/token handling.
- Treat API responses as untrusted input. Check `response.ok`, handle network errors, and validate data before relying on it.
- Avoid inserting untrusted strings through `innerHTML`. Prefer `textContent` for plain text.
- Explain that a class or closure can organise state, but does not automatically make data secure.

## Maintaining the material

When adding or revising a lesson:

- Preserve useful original practicals and explain their intended learning purpose.
- Mark unfinished code as unfinished; do not imply that it works.
- Keep each concept in the lesson where it naturally belongs. Link forward when a topic is only being previewed.
- Use one canonical explanation per concept and link to it rather than duplicating inconsistent definitions.
- Verify every code sample before marking it runnable.
- Update the lesson index and root README when the curriculum changes.

## Reference material

Use primary documentation to verify language behaviour:

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [ECMAScript specification](https://tc39.es/ecma262/)
- [Node.js documentation](https://nodejs.org/docs/latest/api/)
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
