import React from 'react';
import css from '../../css/contact.module.css';
import Title from '../Title';

const Contact = () => {
  return (
    <section className={css.contact}>
      <Title title={'contact'} subtitle={'us'} />
      <div className={css.center}>
        <form action="https://formspree.io/xjndbgyx" method="POST">
          <label htmlFor={'name'}>name</label>
          <input
            type={'text'}
            name={'name'}
            id={'name'}
            className={css.formControl}
            placeholder={'John Doe'}
          />
          <label htmlFor={'email'}>email</label>
          <input
            type={'email'}
            name={'email'}
            id={'email'}
            className={css.formControl}
            placeholder={'john@doe.com'}
          />
          <label htmlFor={'message'}>message</label>
          <textarea
            name={'message'}
            id={'message'}
            rows={10}
            className={css.formControl}
            placeholder={'Message to author'}
          />
          <input type={'submit'} value={'submit'} className={css.submit} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
