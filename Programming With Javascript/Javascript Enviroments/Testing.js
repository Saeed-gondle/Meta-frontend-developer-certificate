// Testing using JEST
import "@testing-library/jest-dom";
describe("DOM Manipulation", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div class="container">
                <h1 class="heading"></h1>
                <p class="paragraph"></p>
                <button type="button">Click Me</button>
            </div>
        `;
  });

  test("should change heading text", () => {
    const heading = document.querySelector(".heading");
    heading.textContent = "Welcome to My Website";
    expect(heading.textContent).toBe("Welcome to My Website");
  });

  test("should change paragraph text", () => {
    const paragraph = document.querySelector(".paragraph");
    paragraph.textContent =
      "This is a simple paragraph added using JavaScript.";
    expect(paragraph.textContent).toBe(
      "This is a simple paragraph added using JavaScript."
    );
  });

  test("should alert on button click", () => {
    // Mock the alert function
    global.alert = jest.fn();

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
      alert("Button was clicked!");
    });
    button.click();
    expect(global.alert).toHaveBeenCalledWith("Button was clicked!");
  });
});
