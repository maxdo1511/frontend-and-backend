"use client"

import {useCallback, useState} from "react";
import FormUserDetails from "@/app/multi-step-form/form-user-details";
import FormUserPersonalDetails from "@/app/multi-step-form/from-user-personal-details";
import Confirm from "@/app/multi-step-form/confirm";
import Success from "@/app/multi-step-form/success";
import {createTheme} from "@mui/material";

export const formTheme = createTheme({
    palette: {
        primary: {
            main: '#007bff',
        },
        secondary: {
            main: '#ffffff',
        },
    },
    shadows: [
        'none',
        '0px 3px 5px -1px rgba(0,0,0,0.2)',
        '0px 6px 10px 0px rgba(0,0,0,0.14)',
        '0px 1px 18px 0px rgba(0,0,0,0.12)',
        '0px 4px 20px -5px rgba(0,0,0,0.2)',
        '0px 8px 36px -7px rgba(0,0,0,0.22)',
    ],
    shape: {
        borderRadius: 4,
    },
    spacing: 8,
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#007bff',
                    '&:hover': {
                        color: '#fff',
                        backgroundColor: '#0056b3',
                    },
                },
            },
        },
    },
})

export default function MultiStepForm() {
    const [state, setState] = useState({
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    })

    const stepForward = (e) => {
        e.preventDefault()
        if (state.step >= 4) return
        setState({...state, step: state.step + 1})
    }

    const stepBackward = (e) => {
        e.preventDefault()
        if (state.step <= 1) return
        setState({...state, step: state.step - 1})
    }

    const handleChange = useCallback((input) => (e) => {
        setState((prevState) => {
            return {...prevState, [input]: e.target.value}
        });
    }, []);

    return (
        <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-items-center flex flex-col border-2 border-gray-400 rounded p-8 shadow-gray-500 shadow-lg w-96"}>
            {
                state.step === 1 &&
                <FormUserDetails handleChange={handleChange} state={state} stepForward={stepForward}/>
            }
            {
                state.step === 2 &&
                <FormUserPersonalDetails handleChange={handleChange} state={state} stepForward={stepForward} stepBackward={stepBackward}/>
            }
            {
                state.step === 3 &&
                <Confirm handleChange={handleChange} state={state} stepForward={stepForward} stepBackward={stepBackward}/>
            }
            {
                state.step === 4 &&
                <Success state={state} stepForward={stepForward} stepBackward={stepBackward}/>
            }
        </div>
    )
}