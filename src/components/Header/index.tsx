import { HeaderTag, Tab } from './styles';
import { SignInButton } from '../SignInButton';
import { useEffect, useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { OpenNavMenuModalButton } from './OpenNavMenuModalButton';
import { NavMenuModal } from './NavMenuModal';

type ActivePage = 'home' | 'posts';

export function Header() {
    const { asPath } = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <HeaderTag>
                <div>
                    <section>
                        <Link href="/">
                            <a>
                                <h1>
                                    Plante com{' '}
                                    <img
                                        src="/images/logo.png"
                                        alt="Logo escola S"
                                    />
                                </h1>
                            </a>
                        </Link>
                    </section>

                    <nav className="navigation-options">
                        <Link href="/">
                            <Tab className={asPath === '/' ? 'active' : ''}>
                                Home
                            </Tab>
                        </Link>
                        <Link href="/posts">
                            <Tab
                                className={asPath === '/posts' ? 'active' : ''}
                            >
                                Posts
                            </Tab>
                        </Link>
                    </nav>
                    <OpenNavMenuModalButton setIsOpen={setIsOpen} />
                    <SignInButton />
                </div>
            </HeaderTag>
            <NavMenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}
