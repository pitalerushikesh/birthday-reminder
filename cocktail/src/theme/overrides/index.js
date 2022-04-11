import { merge } from "lodash";

import Chip from "./Chip";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(Chip(theme));
}
