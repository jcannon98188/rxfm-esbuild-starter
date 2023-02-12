import { take } from "rxjs/operators";
import HelloComponent from "./HelloComponent";

describe("HelloComponent", () => {
  it("should render the component", () => {
    const name = "Bob";
    const component = HelloComponent({ name });
    component.pipe(take(1)).subscribe((c) => {
      expect(c.textContent).toBe(`Hello ${name}`);
    });
  });
});
