type CountDisplayProps = {
    count: number
}

export const CountDisplay = ({ count }: CountDisplayProps) => (
    <p style={{marginTop: '10px', fontSize: '40px'}}>
        Current count: <span className={count === 5 ? 'max-current' : ''}>
                  {count}
                </span>
    </p>
    );

