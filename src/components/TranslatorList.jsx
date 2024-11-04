// src/components/TranslatorList.jsx
import React from 'react';
import styles from '../styles/TranslatorList.module.css';

const translators = [
  {
    image: 'https://media.istockphoto.com/id/1202959798/fr/photo/macbook-pro-16-pouces-avec-vue-avant-de-barre-tactile.jpg?s=612x612&w=0&k=20&c=7lAxpCpLiUWccN9y-A5D22ZBWswV2I18QKnwYKzDZkI=', // Place images in the public/images directory or use external URLs
    name: 'Nom du traducteur...',
    rating: 4.2,
    description: 'Nous savons combien il est crucial de communiquer efficacement dans un monde interconnecté...',
  },
  {
    image: 'https://media.istockphoto.com/id/1202959798/fr/photo/macbook-pro-16-pouces-avec-vue-avant-de-barre-tactile.jpg?s=612x612&w=0&k=20&c=7lAxpCpLiUWccN9y-A5D22ZBWswV2I18QKnwYKzDZkI=', // Place images in the public/images directory or use external URLs
    name: 'Nom du traducteur...',
    rating: 4.2,
    description: 'Nous savons combien il est crucial de communiquer efficacement dans un monde interconnecté...',
  },
  {
    image: 'https://media.istockphoto.com/id/1202959798/fr/photo/macbook-pro-16-pouces-avec-vue-avant-de-barre-tactile.jpg?s=612x612&w=0&k=20&c=7lAxpCpLiUWccN9y-A5D22ZBWswV2I18QKnwYKzDZkI=', // Place images in the public/images directory or use external URLs
    name: 'Nom du traducteur...',
    rating: 4.2,
    description: 'Nous savons combien il est crucial de communiquer efficacement dans un monde interconnecté...',
  },
  {
    image: 'https://media.istockphoto.com/id/1202959798/fr/photo/macbook-pro-16-pouces-avec-vue-avant-de-barre-tactile.jpg?s=612x612&w=0&k=20&c=7lAxpCpLiUWccN9y-A5D22ZBWswV2I18QKnwYKzDZkI=', // Place images in the public/images directory or use external URLs
    name: 'Nom du traducteur...',
    rating: 4.2,
    description: 'Nous savons combien il est crucial de communiquer efficacement dans un monde interconnecté...',
  },
  {
    image: 'https://media.istockphoto.com/id/1202959798/fr/photo/macbook-pro-16-pouces-avec-vue-avant-de-barre-tactile.jpg?s=612x612&w=0&k=20&c=7lAxpCpLiUWccN9y-A5D22ZBWswV2I18QKnwYKzDZkI=', // Place images in the public/images directory or use external URLs
    name: 'Nom du traducteur...',
    rating: 4.2,
    description: 'Nous savons combien il est crucial de communiquer efficacement dans un monde interconnecté...',
  },
  {
    image: 'https://media.istockphoto.com/id/1202959798/fr/photo/macbook-pro-16-pouces-avec-vue-avant-de-barre-tactile.jpg?s=612x612&w=0&k=20&c=7lAxpCpLiUWccN9y-A5D22ZBWswV2I18QKnwYKzDZkI=', // Place images in the public/images directory or use external URLs
    name: 'Nom du traducteur...',
    rating: 4.2,
    description: 'Nous savons combien il est crucial de communiquer efficacement dans un monde interconnecté...',
  },
  {
    image: 'https://media.istockphoto.com/id/1202959798/fr/photo/macbook-pro-16-pouces-avec-vue-avant-de-barre-tactile.jpg?s=612x612&w=0&k=20&c=7lAxpCpLiUWccN9y-A5D22ZBWswV2I18QKnwYKzDZkI=', // Place images in the public/images directory or use external URLs
    name: 'Nom du traducteur...',
    rating: 4.2,
    description: 'Nous savons combien il est crucial de communiquer efficacement dans un monde interconnecté...',
  },
  {
    image: 'https://media.istockphoto.com/id/1202959798/fr/photo/macbook-pro-16-pouces-avec-vue-avant-de-barre-tactile.jpg?s=612x612&w=0&k=20&c=7lAxpCpLiUWccN9y-A5D22ZBWswV2I18QKnwYKzDZkI=', // Place images in the public/images directory or use external URLs
    name: 'Nom du traducteur...',
    rating: 4.2,
    description: 'Nous savons combien il est crucial de communiquer efficacement dans un monde interconnecté...',
  },
  {
    image: 'https://media.istockphoto.com/id/1202959798/fr/photo/macbook-pro-16-pouces-avec-vue-avant-de-barre-tactile.jpg?s=612x612&w=0&k=20&c=7lAxpCpLiUWccN9y-A5D22ZBWswV2I18QKnwYKzDZkI=', // Place images in the public/images directory or use external URLs
    name: 'Nom du traducteur...',
    rating: 4.2,
    description: 'Nous savons combien il est crucial de communiquer efficacement dans un monde interconnecté...',
  },
  // Add more translator objects as needed
];

const TranslatorList = () => {
  return (
    <div className={styles.translatorList}>
      <h2>Pour traduire vos documents, consultez cette liste :</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className={styles.translatorCardsContainer}>
        <div className={styles.translatorCards}>
          {translators.map((translator, index) => (
            <div className={styles.translatorCard} key={index}>
              <img src={translator.image} alt={translator.name} className={styles.translatorImage} />
              <div className={styles.translatorInfo}>
                <h3>{translator.name}</h3>
                <span className={styles.translatorRating}>{translator.rating}</span>
                <p>{translator.description}</p>
                <button className={styles.contactButton}>Contacter le traducteur</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranslatorList;
