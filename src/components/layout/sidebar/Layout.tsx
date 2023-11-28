// import Head from "next/head";
import type { PropsWithChildren } from "react";

import { SideBar } from "./SideBar";

export const LayoutBar = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <aside>
            <div>
                это не сайд
            </div>
            <SideBar />
            {children}
        </aside>

    )
}