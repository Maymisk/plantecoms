import { FormEvent, ReactNode } from 'react';
import { Button } from './styles';

interface IProps {
    children: ReactNode;
    disabled: boolean;
}

export function SubmitPostButton({ children, disabled }: IProps) {
    return (
        <Button type="submit" disabled={disabled}>
            {children}
        </Button>
    );
}
