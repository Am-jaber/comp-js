import { Button } from "./lib";

function App() {
  return (
    <div className="mx-auto max-w-3xl p-8">
      <h1 className="mb-8 text-2xl font-semibold">comp-js showcase</h1>

      <section>
        <h2 className="mb-3 text-lg font-medium">Button</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
