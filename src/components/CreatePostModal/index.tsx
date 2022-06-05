import axios from 'axios';
import { FormEvent, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { api } from '../../services/api';
import { SubmitPostButton } from '../SubmitPostButton';
import { FileInputContainer } from './styles';

interface IProps {
    isOpen: boolean;
    setIsOpen(value: boolean): void;
}

export function CreatePostModal({ isOpen, setIsOpen }: IProps) {
    const [file, setFile] = useState<File>(null);
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [submissionErrorMessage, setSubmissionErrorMessage] = useState('');

    function handleFormSubmission(event: FormEvent) {
        setIsLoading(true);
        event.preventDefault();

        async function uploadFile() {
            try {
                const { data } = await api.post('/submitpost', {
                    name: file.name,
                    type: file.type,
                    description
                });

                const url = data.url;

                const response = await axios.put(url, file, {
                    headers: {
                        'Content-type': file.type,
                        'Access-Control-Allow-Origin': '*',
                        'x-amz-acl': 'public-read',
                        Key: file.name
                    }
                });
            } catch (error) {
                setIsLoading(false);

                if (error.response?.data.message === 'User needs to log in') {
                    setSubmissionErrorMessage('Você precisa estar logado!');
                }

                if (error instanceof TypeError) {
                    setSubmissionErrorMessage(
                        'Você precisa selecionar um arquivo!'
                    );
                }

                return;
            }

            setIsLoading(false);
            setFile(null);
            setDescription('');
            setIsOpen(false);
            setSubmissionErrorMessage('');
        }

        uploadFile();
    }

    function closeModal() {
        setIsOpen(false);
        setSubmissionErrorMessage('');
    }

    return (
        <Modal
            onRequestClose={closeModal}
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        >
            <form onSubmit={handleFormSubmission}>
                <button
                    type="button"
                    onClick={closeModal}
                    className="react-modal-close"
                >
                    <FiX />
                </button>

                <FileInputContainer>
                    <label htmlFor="fileInput">Selecione uma foto</label>
                    <input
                        accept="image/*"
                        type="file"
                        name="file"
                        id="fileInput"
                        onChange={event => {
                            setFile(event.target.files[0]);
                            setSubmissionErrorMessage('');
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
                            setSubmissionErrorMessage('');
                        }}
                        value={description}
                    />
                </div>
                <div>
                    <SubmitPostButton disabled={isLoading}>
                        {isLoading ? (
                            <AiOutlineLoading className="loading" />
                        ) : (
                            `${submissionErrorMessage}` || 'Enviar'
                        )}
                    </SubmitPostButton>
                </div>
            </form>
        </Modal>
    );
}
