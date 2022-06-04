import Modal from 'react-modal';
import { SubmitPostButton } from '../SubmitPostButton';
import { FileInputContainer } from './styles';
import { FiX } from 'react-icons/fi';
import { ChangeEvent, FormEvent, useState } from 'react';
import { api } from '../../services/api';
import { useSession } from 'next-auth/react';
import { AiOutlineLoading } from 'react-icons/ai';

interface IProps {
    isOpen: boolean;
    setIsOpen(value: boolean): void;
}

export function CreatePostModal({ isOpen, setIsOpen }: IProps) {
    const [imgInput, setImgInput] = useState<File>(null);
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleFormSubmission(event: FormEvent) {
        setIsLoading(true);
        event.preventDefault();

        const formData = new FormData();
        formData.append('description', description);
        formData.append('file', imgInput);

        api.post('/submitPost', formData).then(() => {
            setImgInput(null);
            setDescription('');
            closeModal();
            setIsLoading(false);
        });
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            onRequestClose={closeModal}
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        >
            <form>
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="react-modal-close"
                >
                    <FiX />
                </button>

                <FileInputContainer>
                    <label htmlFor="fileInput">Selecione uma foto</label>
                    <input
                        type="file"
                        name="file"
                        id="fileInput"
                        onChange={event => {
                            setImgInput(event.target.files[0]);
                            event.target.value = null;
                        }}
                    />
                </FileInputContainer>

                <div>
                    <input
                        type="text"
                        name="description"
                        required
                        placeholder="Digite a descrição do post..."
                        onChange={event => {
                            setDescription(event.target.value);
                        }}
                        value={description}
                    />
                </div>
                <div>
                    <SubmitPostButton
                        handleFormSubmission={handleFormSubmission}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <AiOutlineLoading className="loading" />
                        ) : (
                            'Enviar'
                        )}
                    </SubmitPostButton>
                </div>
            </form>
        </Modal>
    );
}