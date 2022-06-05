import { FormEvent, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { FiArrowUpLeft, FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { api } from '../../services/api';
import { SubmitPostButton } from '../SubmitPostButton';
import { FileInputContainer } from './styles';
import axios from 'axios';

interface IProps {
    isOpen: boolean;
    setIsOpen(value: boolean): void;
}

export function CreatePostModal({ isOpen, setIsOpen }: IProps) {
    const [file, setFile] = useState<File>(null);
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleFormSubmission(event: FormEvent) {
        setIsLoading(true);
        event.preventDefault();

        async function uploadFile() {
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
                    'x-amz-acl': 'public-read'
                }
            });

            console.log(response);

            setIsLoading(false);
            setIsOpen(false);
            setFile(null);
            setDescription('');
        }

        uploadFile();
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
            <form onSubmit={handleFormSubmission}>
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
                            setFile(event.target.files[0]);
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
                    <SubmitPostButton disabled={isLoading}>
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
