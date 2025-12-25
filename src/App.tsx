import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";

const specPath = "./dist/openapi.json";

function App() {
  return (
    <ApiReferenceReact
      configuration={{
        url: specPath,

        hideClientButton: true,
        showSidebar: true,
        showDeveloperTools: "localhost",
        operationTitleSource: "summary",
        theme: "default",
        persistAuth: false,
        telemetry: true,
        layout: "modern",
        isEditable: false,
        isLoading: false,
        hideModels: false,
        documentDownloadType: "yaml",
        hideTestRequestButton: false,
        hideSearch: false,
        showOperationId: false,
        hideDarkModeToggle: false,
        withDefaultFonts: true,
        defaultOpenAllTags: false,
        expandAllModelSections: false,
        expandAllResponses: false,
        orderSchemaPropertiesBy: "alpha",
        orderRequiredPropertiesFirst: true,
        default: false,
      }}
    />
  );
}

export default App;
