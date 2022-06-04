import { FormEvent, ReactNode } from 'react';
import { Button } from './styles';

interface IProps {
    handleFormSubmission(event: FormEvent): void;
    children: ReactNode;
    disabled: boolean;
}

export function SubmitPostButton({
    handleFormSubmission,
    children,
    disabled
}: IProps) {
    return (
        <Button
            type="submit"
            onClick={handleFormSubmission}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
