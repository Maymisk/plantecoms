import { useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { FaGlobe, FaCameraRetro } from 'react-icons/fa';
import Link from 'next/link';

interface IProps {
    isOpen: boolean;
    setIsOpen(value: boolean): void;
}

export function NavMenuModal({ isOpen, setIsOpen }: IProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            className="nav-menu-modal-content"
            overlayClassName="nav-menu-modal-overlay"
            ariaHideApp={false}
        >
            <Container>
                <div>
                    <FaGlobe />
                    <Link href="/">
                        <a onClick={() => setIsOpen(false)}>Home</a>
                    </Link>
                </div>
                <div>
                    <FaCameraRetro />
                    <Link href="/posts">
                        <a onClick={() => setIsOpen(false)}>Posts</a>
                    </Link>
                </div>
            </Container>
        </Modal>
    );
}
