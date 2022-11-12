import { Routes, Route} from "react-router-dom";

export function Router() {
    return (
        <Routes>
          
                <Route path="/" exact element={<Home />} />
                <Route path="/history" element={<History />} />
     
        </Routes>
    )
}