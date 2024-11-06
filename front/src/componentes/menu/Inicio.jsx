// Inicio.js
import React from 'react';
import Post from '../posts/Posts'; 
import './Inicio.css'
const Inicio = () => {
    const posts = [
        {
            title: 'Título de la Publicación 1',
            date: '30 de octubre de 2024',
            content: 'Este es el contenido de la primera publicación.',
            image: 'imagen-ejemplo1.jpg',
        },
        {
            title: 'Título de la Publicación 2',
            date: '29 de octubre de 2024',
            content: 'Este es el contenido de la segunda publicación.',
            image: 'imagen-ejemplo2.jpg',
        },
    ];

    return (
        <div className="inicio">
            <h1>Inicio</h1>
            <div className="posts-container"> 
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        title={post.title}
                        date={post.date}
                        content={post.content}
                        image={post.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Inicio;