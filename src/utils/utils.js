import {useContext} from "react";
import {AuthContext} from "../context";

export function useToasting() {
    const { setToastState, setToastText } = useContext(AuthContext);

    function toasting(state, message) {
        setToastState(state);
        setToastText(message);
        setTimeout(() => {
            setToastState('');
            setToastText('');
        }, 5000);
    }

    return { toasting };
}