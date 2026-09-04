import "styled-components";

import { theme } from "./theme";

declare module "styled-components" {
  interface DefaultTheme {
    colors: typeof theme.colors;
    fonts: typeof theme.fonts;
    sizes: typeof theme.sizes;
  }
}