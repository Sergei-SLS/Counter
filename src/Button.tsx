import { MouseEventHandler } from 'react'

type ButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    name: string
}

export const Button = ({ onClick, disabled, name }: ButtonProps) => {
    return (
        <button onClick={onClick}
                disabled={disabled}
                style={{ marginRight: '10px', borderRadius: 0 }}
        >
            {name}
        </button>
    )
}