import React from 'react';
import { Modal, Typography, Button } from '@material-ui/core';

interface NewsModalProps {
    open: boolean;
    handleClose: () => void;
    item: { title: string; content: string; url: string; imageUrl: string } | null;
}

const NewsModal: React.FC<NewsModalProps> = ({ open, handleClose, item }) => {
    const handleReadFullArticle = () => {
        window.open(item?.url, '_blank');
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                <Typography variant="h6">{item?.title}</Typography>
                <Typography variant="body2">{item?.content}</Typography>
                <img src={item?.imageUrl} alt={item?.title} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', marginTop: '10px' }} />
                <Button variant="contained" color="primary" onClick={handleClose}>Close</Button>
                <Button variant="contained" color="secondary" onClick={handleReadFullArticle} style={{ marginLeft: '10px' }}>Read full article</Button>
            </div>
        </Modal>
    );
};

export default NewsModal;
