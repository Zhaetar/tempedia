import { TemTemApiTem } from "@maael/temtem-types";
import { createContext } from "react";

const DataContext = createContext<Partial<TemTemApiTem>>({});

export default DataContext;
