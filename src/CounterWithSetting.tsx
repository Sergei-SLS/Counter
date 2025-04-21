import { useState } from 'react';
import { Button } from './Button';
import { CountDisplay } from './CountDisplay';

type CounterSettings = {
    start: number;
    max: number;
};

const STORAGE_KEY = 'counterSettings';

export function CounterWithSettings() {
    const saved = localStorage.getItem(STORAGE_KEY);
    let initialStart = 0;
    let initialMax = 5;

    if (saved) {
        try {
            const parsed: CounterSettings = JSON.parse(saved);
            initialStart = parsed.start;
            initialMax = parsed.max;
        } catch {
            console.warn('Некорректные данные в localStorage');
        }
    }

    const [startValue, setStartValue] = useState<number>(initialStart);
    const [maxValue, setMaxValue] = useState<number>(initialMax);
    const [count, setCount] = useState<number>(initialStart);
    const [error, setError] = useState<string>('');
    const [isSettingsConfirmed, setIsSettingsConfirmed] = useState(false);

    const isInvalid = startValue < 0 || maxValue <= startValue;

    const handleSetValues = () => {
        if (isInvalid) {
            setError('Некорректные значения: начальное >= максимального или меньше 0');
        } else {
            setError('');
            const settings: CounterSettings = { start: startValue, max: maxValue };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
            setCount(startValue);
            setIsSettingsConfirmed(true);
        }
    };

    const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.target.value));
        setIsSettingsConfirmed(false);
        setCount(0)
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.target.value));
        setIsSettingsConfirmed(false);
        setCount(0);
    };

    const increment = () => {
        const max = isSettingsConfirmed ? maxValue : initialMax;
        if (count < max) {
            setCount(prev => prev + 1);
        }
    };

    const reset = () => {
        const start = isSettingsConfirmed ? startValue : initialStart;
        setCount(start);
    };

    const inputStyle = (isError: boolean): React.CSSProperties => ({
        border: isError ? '2px solid red' : '1px solid #ccc',
        borderRadius: '4px',
        padding: '4px',
        width: '60px'
    });

    return (
        <div className="counter">
            <div>
                <label>
                    Начальное значение:
                    <input
                        type="number"
                        value={startValue}
                        onChange={handleStartChange}
                        style={inputStyle(startValue < 0 || startValue >= maxValue)}
                    />
                </label>
                <label style={{ marginLeft: '10px' }}>
                    Максимальное значение:
                    <input
                        type="number"
                        value={maxValue}
                        onChange={handleMaxChange}
                        style={inputStyle(maxValue <= startValue)}
                    />
                </label>
                <Button name="Установить" onClick={handleSetValues} />
            </div>
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
            <div style={{ marginTop: '20px' }}>
                <Button onClick={increment} disabled={count >= (isSettingsConfirmed ? maxValue : initialMax)} name="Increment" />
                <Button onClick={reset} disabled={count === (isSettingsConfirmed ? startValue : initialStart)} name="Reset" />
            </div>
            <CountDisplay count={count}
                          valueMax={isSettingsConfirmed ? maxValue : initialMax}/>
        </div>
    );
}
