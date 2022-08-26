import { CssModulesExample } from "Containers/CssModulesExample";

export function HomeContainer() {
  return (
    // Only render if our api call is not loading, there is no error and some photos have been returned
    <CssModulesExample />
  );
}
export { HomeContainer as Home };
