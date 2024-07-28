import { MouseEvent, useEffect, useState } from 'react';
import * as Tags from './Switch.styles';

interface SwitchProps {
    value: boolean;
    labels: [string,string];
    onChange?: (e: MouseEvent<HTMLDivElement>) => void;
}

const Switch:React.FC<SwitchProps> = ({value, labels, onChange}:SwitchProps) => {

    const [currentValue, setCurrentValue] = useState<boolean>(value);

    const handleChange = (e: MouseEvent<HTMLDivElement>) => {
        onChange && onChange(e);
        setCurrentValue(s => !s);
    }


    useEffect(()=>{
        setCurrentValue(value);
    },[value]);


    return (
        <Tags.Container onClick={handleChange}>
            <Tags.Label>{labels[0]}</Tags.Label>
            <Tags.Switch className={currentValue ? 'checked' : ''} />
            <Tags.Label>{labels[1]}</Tags.Label>
        </Tags.Container>
    );
}

export default Switch;