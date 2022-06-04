import { useState } from 'react';
import { FiList } from 'react-icons/fi';
import { NavMenuModal } from '../NavMenuModal';
import { Button } from './styles';

interface IProps {
    setIsOpen(value: boolean): void;
}

export function OpenNavMenuModalButton({ setIsOpen }: IProps) {
    return (
        <Button type="button" onClick={() => setIsOpen(true)}>
            <FiList color="white" />
        </Button>
    );
}
