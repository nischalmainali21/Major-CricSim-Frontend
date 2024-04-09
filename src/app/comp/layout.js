import { SelectedFiltersProvider } from "@/../context/SelectedFiltersContext";
import { CompareSelectedPlayersProvider } from "../../../context/CompareSelectedPlayersContext";
export default function RootLayout({ children }) {
  return (
    <>
      <SelectedFiltersProvider>
        <CompareSelectedPlayersProvider>
          {children}
        </CompareSelectedPlayersProvider>
      </SelectedFiltersProvider>
    </>
  );
}
