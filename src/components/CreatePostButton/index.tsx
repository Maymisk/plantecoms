import { Button } from './styles';

interface IProps {
    setIsOpen(value: boolean): void;
}

export function CreatePostButton({ setIsOpen }: IProps) {
    return (
        <Button type="button" onClick={() => setIsOpen(true)}>
            Postar agora!
        </Button>
    );
}
