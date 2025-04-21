

type ButtonProps = {
    onClick: () => void,
    disabled?: boolean
    name: string
}

export const Button = ({ onClick, disabled, name }: ButtonProps) => {
    return (
        <button onClick={onClick}
                disabled={disabled}
                style={{ marginLeft: '10px', marginRight: '10px', borderRadius: 0 }}
        >
            {name}
        </button>
    )
}