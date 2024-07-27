/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Button } from 'styles/components/button';
import { useMediaQuery } from '@mui/material';
import { useAppSelector, useAppThunkDispatch } from 'redux/store';
import { deleteUserById } from 'redux/settings/thunkAction';
import Link from 'next/link';
import { IUserDetails } from 'types/user';
import { TailSpin } from 'react-loader-spinner';

interface IDeleteModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

const customStyles = {
  overlay: {
    backgroundColor: '#00000029',
    zIndex: '3',
    width: '100%',
    height: '100vh',
  },
  content: {
    width: '100%',
    height: '100%',
    left: '0',
    top: '0',
    border: 'none',
    backgroundColor: '#00000029',
    fontFamily: "'Nunito', sans-serif",
  },
};

const DeleteModal = (props: IDeleteModal) => {
  const isTablet = useMediaQuery('(max-width: 780px)');
  const [success, setSuccess] = useState(false);
  const dispatch = useAppThunkDispatch();
  const [user, setUser] = useState<IUserDetails>();
  const [message, setMessage] = useState('');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user') || '{}'));
  }, []);

  const { loading } = useAppSelector(({ deleteUserById }) => deleteUserById);

  useEffect(() => {
    if (loading === 'failed') {
      props.onRequestClose();
      if (localStorage.getItem('error') && localStorage) {
        const error = localStorage.getItem('error') || '';
        setMessage(error);
      }
    }
  }, [loading]);

  const handleDeleteAccount = (id: string) => {
    dispatch(deleteUserById(id)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        localStorage.removeItem('user');
        sessionStorage.removeItem('token');
        setSuccess(true);
      }
    });
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={(e) => {
        e.stopPropagation();
        props.onRequestClose;
      }}
      style={customStyles}
    >
      <div
        css={{
          zIndex: '3',
          width: '100%',
          height: 'inherit',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          background: success ? '#333' : '',
        }}
        onClick={props.onRequestClose}
      ></div>
      <div
        css={{
          width: '467px',
          height: '295px',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: isTablet ? 'center' : '',
          padding: isTablet ? '1rem' : '2rem',
          boxShadow: '0px 1px 10px #00000029',
          borderRadius: '20px',
          zIndex: '5',
          position: 'absolute',
          top: '25%',
          left: '25%',
        }}
        onClick={() => {}}
      >
        {success ? (
          <div>
            <p css={{ marginBlock: '3rem' }}>Your account has been deleted.</p>
            <Link href='/'>
              <Button height='52px' width='100%'>
                <p css={{ fontSize: '16px' }}>Go to Homepage</p>
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <p
              css={{
                fontSize: isTablet ? '18px' : '24px',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
              }}
            >
              This Action Cannot Be Reversed
            </p>
            <div>
              <p>Are you sure you want to delete this</p>
              <p>account?</p>
            </div>
            <div
              css={{
                display: 'grid',
                gridTemplateColumns: isTablet ? '40% 58%' : '1fr 1fr',
                gap: isTablet ? '3%' : '5%',
                marginTop: '3rem',
              }}
            >
              <Button height='52px' width='100%' onClick={props.onRequestClose}>
                <p css={{ fontSize: '16px' }}>Cancel</p>
              </Button>
              <Button
                height='52px'
                width='100%'
                background='#E4E4E4'
                color='#7C35AB'
                onClick={() => handleDeleteAccount(user?._id || '')}
              >
                {loading === 'loading' ? (
                  <>
                    <p>Deleting</p>
                    <TailSpin
                      height={15}
                      width={15}
                      color='#7C35AB'
                      ariaLabel='loading'
                      radius={'2'}
                    />
                  </>
                ) : (
                  <p css={{ fontSize: '16px' }}>Delete my Account</p>
                )}
              </Button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default DeleteModal;
