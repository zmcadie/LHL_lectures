# W3D3 - User Authentication with Express

## Outline
1. Create a login form
2. Add server-side authentication
3. HTTP lifecycle
4. Cookies
5. Add cookies to our app

## HTTP Lifecycle (HTTP is stateless)

**Browser** -> **Server** -> **Browser**

### What does stateless mean?

- No memory
- The server does not remember past requests

### What is state?

- anything saved by our application
  - logged in user
  - progress in a form
  - items in a cart
  - etc.

### Benefits stateless
- Scalability — no session related dependency
- Easier to cache
- No information to lose track of

### Disadvantages stateless
- Hard to track context
- Context must be created each time

## Using cookies
### How do cookies work?
Small text files that the browser saves, and sends back to the server with future requests

Key value pairs, like an object

### Security
**Cookies are not secure** — Only store non-sensitive data in cookies (no passwords!)

## Other notes from lecture

### Form submit: <button> vs <input>
A form should always have a submit button, however there are two ways to add that button.

- **Option 1:** `<button type="submit">Submit</button>`
- **Option 2:** `<input type="submit" value="Submit">`

These options work largely the same way and they will both render your form correctly.
The key difference is that using a `<button>` allows you to use HTML in the content.
The `<input>` on the other hand must have its content set with the `value` attribute and therefor can only have text content.

