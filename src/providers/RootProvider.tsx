import {SessionProvider} from "./session/SessionProvider.tsx";
import {ConfigProvider} from "./config/ConfigProvider.tsx";
import {ErrorProvider} from "./error/ErrorProvider.tsx";

export function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <ConfigProvider>
                <ErrorProvider>
                    {children}
                </ErrorProvider>
            </ConfigProvider>
        </SessionProvider>
    );
}