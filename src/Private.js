import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import Login from "./Components/Auth/Login";
import { UserContext } from "./contexts/user.context";

const Private = ({ children }) => {
    const { user, isLoading } = useContext(UserContext);
    return isLoading ? <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <CircularProgress /> 
    </div>: 
    user ? (
        <>
            {children}
        </>
    ) : <Login />
}
export default Private;