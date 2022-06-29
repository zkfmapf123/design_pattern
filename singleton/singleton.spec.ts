import { MultiThreaingSingleton } from "./multi-threading";
import { PastSingleton } from "./past.singleton";

describe("singletone test", () => {
  it("past-singleton", (done) => {
    const a = PastSingleton.getInstance();
    const b = PastSingleton.getInstance();
    const c = PastSingleton.getInstance();

    a.sayMyName();
    b.sayMyName();
    c.sayMyName();
    done();
  });

  it("multi threading", (done) => {
    const a = MultiThreaingSingleton.getInstance();
    const b = MultiThreaingSingleton.getInstance();
    const c = MultiThreaingSingleton.getInstance();

    a.sayMyName();
    b.sayMyName();
    c.sayMyName();

    done();
  });
});
