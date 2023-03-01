import { useState } from "react";

export default function useRange(initialValue) {
    const [value, setValue] = useState(initialValue)
    const [title, setTitle] = useState(initialValue)

    const onChange = (e) => {
        setValue(e.target.value)
        setTitle(e.target.value)
    }

    return {
        value, title, onChange
    }
}