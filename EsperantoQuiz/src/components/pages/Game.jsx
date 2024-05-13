import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import './game.css'; // Importez le fichier CSS pour les styles personnalisés



const Game = () => {
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const ia = urlParams.get('ia') === 'true';

    const transitions = useTransition(true, {
        from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
    });

    const [inputValue, setInputValue] = useState('');
    const [translatedValue, setTranslatedValue] = useState('');




    const handleTranslate = async () => {
        try {
            const response = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=eo&dt=t&q=${encodeURIComponent(inputValue)}`
            );
            const data = await response.json();
            const translatedText = data[0][0][0]; // Récupérer la traduction depuis la réponse JSON
            setTranslatedValue(translatedText);
        } catch (error) {
            console.error('Erreur lors de la traduction :', error);
        } 

    };
    const handleClear = () => {
        setInputValue('');
        setTranslatedValue('');
    };

    

    return (
        <>
            {transitions((style, item) =>
                item && (
                    <animated.div style={style}>
                        <Container fluid className="vh-100 d-flex flex-column justify-content-start align-items-center ">
                            <h1 className="mt-5">Joueur vs {ia ? 'IA' : 'Joueur'}</h1>
                            <div className="d-flex w-100 flex-column align-items-center justify-content-center flex-grow-1 mb-5 ">
                                <Row className='w-100 d-flex justify-content-center align-items-center mb-2'>
                                    <Col>
                                        <textarea
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            className="form-control mb-2 w-100 custom-textarea"
                                            placeholder="Entrez une phrase en français"
                                            style={{ filter: translatedValue ? 'blur(5px)' : 'none' }}
                                            />
                                    </Col>
                                </Row>
                                <Row className='w-100 d-flex justify-content-center align-items-center mb-2'>
                                    <Col className='d-flex justify-content-center align-items-center gap-2'>
                                        <Button onClick={handleTranslate} className="me-2 mr-5">Traduire</Button>
                                        <Button onClick={handleClear} variant="secondary">Effacer</Button>
                                    </Col>
                                </Row>
                                <Row className='w-100 d-flex justify-content-center align-items-center mb-2'>
                                    <Col className='d-flex justify-content-center align-items-center'>
                                        <textarea
                                            value={translatedValue}
                                            className="form-control mb-2 w-100 custom-textarea"
                                            placeholder="Résultat en espéranto"
                                            readOnly
                                        />
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Button variant="primary" size="lg" href="/">Retour</Button>
                                </div>
                            </div>
                        </Container>
                    </animated.div>
                )
            )}
        </>
    );
};

export default Game;
