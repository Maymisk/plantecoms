import { useState } from 'react';
import { CreatePostButton } from '../components/CreatePostButton';
import { CreatePostModal } from '../components/CreatePostModal';
import { PostCard } from '../components/PostCard';
import { Main } from '../styles/homeStyles';

export default function Home() {
    const [postModalIsOpen, setPostModalIsOpen] = useState(false);
    return (
        <Main>
            <section className="dois">
                <p>
                    Dia 05/06 é mundialmente conhecido como o Dia Mundial do
                    Meio Ambiente. Com esse conhecimento em mente, a turma 202
                    do segundo ano do ensino médio da Escola S resolveu
                    mobilizar-se a fim de expandir esse conhecimento e ressaltar
                    a importância desta data, que muitas vezes passa
                    despercebida perante a sociedade.
                </p>
                <p>
                    Sendo assim, juntamente com a professora Francieli Delazeri,
                    decidimos realizar um flashmob. Mas o que é um flash mob?
                    Basicamente, um flash mob é uma ação organizada por um
                    grande número de pessoas que busca transmitir uma mensagem.
                    Normalmente essas pessoas se dispersam no meio do público
                    para proporcionar uma melhor experiência e atrair mais ainda
                    a atenção de todos.
                </p>
                <p>
                    A nossa iniciativa será baseada no plantio de árvores,
                    dentro e fora do ambiente escolar, de modo a auxiliar na
                    mitigação das mudanças climáticas. Tais mudanças afetam
                    negativamente toda a biodversidade, pois levam à necessidade
                    de adaptação ou migração das espécies.
                </p>

                <p>
                    Sob esse pretexto, quaisquer alunos que postarem fotos neste
                    site ou na hashtag do projeto plantando as mudas fornecidas
                    pela turma 202 (com o rosto aparecendo!), estarão competindo
                    à um sorteio de três combos pastel + coca! 😋
                </p>

                <CreatePostButton setIsOpen={setPostModalIsOpen} />
            </section>

            <CreatePostModal
                isOpen={postModalIsOpen}
                setIsOpen={setPostModalIsOpen}
            />
        </Main>
    );
}
