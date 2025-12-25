import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";

function App() {
  return (
    <ApiReferenceReact
      configuration={{
        url: "https://registry.scalar.com/@scalar/apis/galaxy?format=yaml",
      }}
    />
  );
}

export default App;
