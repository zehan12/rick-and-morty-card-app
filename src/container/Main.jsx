import { Fragment } from "react"
import { QueryClientProvider, QueryClient } from "react-query";
import Characters from "../components/Charcters";

const queryClient = new QueryClient();


const Main = () => {
    return (
        <Fragment>
            <div className="container">
                <QueryClientProvider client={queryClient}>
                    <h1>Rick and Morty</h1>
                    <Characters />
                </QueryClientProvider>
            </div>
        </Fragment>
    )
}

export default Main;

