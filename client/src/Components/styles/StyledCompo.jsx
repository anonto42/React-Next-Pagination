import { styled  } from "@mui/material";

export const VisuallyHidden = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px"
})

export const InputBox = styled("input")`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 3rem;
    border-radius: 1.5rem;
    background-color: rgba(255,255,255,0.8);
`


export const SerchFild = styled("input")`
    padding: 1rem 2rem;
    width: 27vmax;
    border: none;
    outline: none;
    background-color: #f1f1f1;
    font-size: 1.1rem;
    border-radius: 1.5rem;
`

export const CurveButton = styled("button")`
    border-radius:1.5rem;
    padding: 0.9rem 2rem;
    background-color: black;
    border:none;
    outline:none;
    color: white;
    font-size:1.1rem;
    &:hover{
        background-color: rgba(0,0,0,0.8);
    }
`