import { darken, lighten } from "polished";

export const theme = {
  colors: {
    main_color: "#5ec4dd",
    hover_color: lighten(0.05, "#5ec4dd"),
    active_color: darken(0.05, "#5ec4dd"),
    bd_color: "#ddd",
  },
};
