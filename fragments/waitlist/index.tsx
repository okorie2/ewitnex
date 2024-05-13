/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { Button } from 'styles/components/button';
import { screen } from 'styles/theme';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { joinWaitlist } from '../../redux/waitlist/thunkAction';
import Loading from 'utitlities/loaders';

export interface IJoinWaitlistFormData {
  email: String;
}

export interface IJoinWaitlistRes {
  status: Boolean;
  message: String;
  type: String;
  data: {
    email: String;
    createdAt: String;
  };
}

const Waitlist = () => {
  const [openAddedWaitingList, setOpenAddedWaitingList] = useState(false);

  const dispatch: any = useDispatch();
  const [email, setEmail] = useState('');
  const loading = useSelector((state: any) => state.joinWaitlist.loading);
  const error = useSelector((state: any) => state.joinWaitlist.error);

  const handleSubmit = () => {
    const formData: IJoinWaitlistFormData = { email };
    dispatch(joinWaitlist(formData));
  };

  useEffect(() => {
    if (loading === 'successful') {
      setOpenAddedWaitingList(!openAddedWaitingList);
      setEmail('');
    }
  }, [loading]);

  return (
    <React.Fragment>
      <div
        css={{
          textAlign: 'center',
          fontFamily: '"Poppins", sans-serif',
          margin: '10rem auto',
          width: '50%',
          marginBottom: '60px',
          marginTop: '8rem',
          [screen.desktop]: { margin: '12rem auto', width: '70%' },
          [screen.tablet]: { margin: '9rem auto', width: '80%' },
          [screen.mobile]: {
            margin: '9rem auto',
            width: '100%',
            padding: '0 1.3rem',
          },
        }}
      >
        <h1
          css={{
            fontSize: '2.3rem',
            [screen.mobile]: { fontSize: '1.8rem' },
          }}
        >
          Join the Waitlist for{' '}
          <strong
            css={{
              color: '#7C35AB',
            }}
          >
            Ewitnex!
          </strong>
        </h1>

        <p
          css={{
            marginTop: '1.2rem',
            marginBottom: '3rem',
            [screen.mobile]: {
              marginBottom: '2rem',
            },
          }}
        >
          Be the first to experience the future of seamless event management and
          get exclusive early access to the Ewitnex platform before the public
          launch
        </p>

        <div
          css={{
            display: 'flex',
            width: '75%',
            margin: '0 auto',
            border: '3px solid #E4E4E4',
            borderRadius: '56px',
            overflow: 'hidden',
            padding: '0 .2rem 0 1rem',
            justifyContent: 'space-between',
            backgroundColor: '#F2F7FB',
            [screen.mobile]: { width: '100%', paddingLeft: '.4rem' },
          }}
        >
          <input
            type='email'
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            css={{
              width: '85%',
              border: 'none',
              padding: '0 1rem',
              fontSize: '1rem',
              backgroundColor: 'inherit',
              fontFamily: '"Poppins", sans-serif',
              color: '#707070',
              '::placeholder': {
                fontSize: '1rem',
                fontFamily: '"Poppins", sans-serif',
                color: ' #707070',
              },

              [screen.mobile]: {
                fontSize: '.9rem',
                '::placeholder': {
                  fontSize: '.9rem',
                },
              },
            }}
          />
          <Button
            css={{
              backgroundColor: '#7C35AB',
              color: '#fff',
              fontSize: '1rem',
              padding: '0 1rem',
              height: '3rem',
              width: '14rem',
              [screen.desktop]: { width: '19rem', fontSize: '1rem' },
              [screen.tablet]: { width: '16rem', fontSize: '1rem' },
              [screen.mobile]: { width: '13rem', fontSize: '.8rem' },
            }}
            disabled={loading === 'loading' || email.length === 0}
            onClick={() => {
              handleSubmit();
            }}
          >
            {loading === 'loading' ? (
              <Loading
                width={30}
                height={20}
                color='#fff'
                background='#7c35ab'
                coverHeight='max-content'
                coverWidth='max-content'
              />
            ) : (
              'Join the waitlist'
            )}
          </Button>
        </div>

        {loading === 'failed' ? (
          <div
            css={{
              width: '75%',
              margin: 'auto',
              marginTop: '.6rem',
              textAlign: 'left',
              paddingLeft: '1rem',
            }}
          >
            <p
              css={{
                color: 'red',
              }}
            >
              {error}
            </p>
          </div>
        ) : null}
      </div>

      {openAddedWaitingList ? (
        <>
          <div
            css={{
              height: '100%',
              width: '100%',
              position: 'fixed',
              top: 0,
              left: 0,
              backgroundColor: '#00000029',
              zIndex: 6,
            }}
            onClick={() => setOpenAddedWaitingList(!openAddedWaitingList)}
          ></div>

          <div
            css={{
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              boxShadow: '0px 1px 10px #00000029',
              width: '40%',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '20px',
              overflow: 'hidden',
              textAlign: 'center',
              padding: '3rem 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: '"Poppins", sans-serif',
              zIndex: 10,
              [screen.desktop]: { width: '60%' },
              [screen.tablet]: { width: '70%' },
              [screen.mobile]: { width: '90%', padding: '3rem .7rem' },
            }}
          >
            <Image
              src='/assets/svgs/check.svg'
              alt='check'
              width={70}
              height={70}
              css={{
                margin: '0 auto',
              }}
            />
            <b
              css={{
                fontSize: '1.5rem',
                margin: '1rem 0',
                [screen.mobile]: { fontSize: '1.5rem' },
              }}
            >
              We&apos;ve added you to our waiting list!{' '}
            </b>
            <p>We will let you know when Ewitnex is ready</p>

            <Button
              css={{
                backgroundColor: '#7C35AB',
                color: '#fff',
                fontSize: '1rem',
                padding: '0 1rem',
                height: '3rem',
                width: '14rem',
                marginTop: '2rem',
                [screen.desktop]: { width: '19rem' },
                [screen.tablet]: { width: '20rem' },
                [screen.mobile]: { width: '13rem', fontSize: '.8rem' },
              }}
              onClick={() => setOpenAddedWaitingList(!openAddedWaitingList)}
            >
              Okay
            </Button>
          </div>
        </>
      ) : null}
    </React.Fragment>
  );
};

export default Waitlist;
