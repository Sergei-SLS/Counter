type CountDisplayProps = {
    count: number
    valueMax: number
}

export const CountDisplay = ({ count, valueMax }: CountDisplayProps) => (
    <p style={{marginTop: '10px', fontSize: '40px'}}>
        Current count: <span className={count === valueMax ? 'max-current' : ''}>
                  {count}
                </span>
    </p>
    );

