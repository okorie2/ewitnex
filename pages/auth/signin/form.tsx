/** @jsxImportSource @emotion/react */

import React, { FormEvent, useEffect, useState } from 'react';
import BasicTextField, {
  PasswordTextField,
} from '@/components/inputs/BasicTextField';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonFormFilled, ButtonFormOutline } from 'styles/components/button';
import { useAppSelector, useAppThunkDispatch } from 'redux/store';
import { signIn, signInWithGoogle } from 'redux/auth/thunkAction';
import { useRouter } from 'next/router';
import { TailSpin } from 'react-loader-spinner';
import ErrorSnackBar from '@/components/snackbars/error';
import SuccessSnackBar from '@/components/snackbars/success';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';
import { useGoogleLogin } from '@react-oauth/google';
import { unwrapResult } from '@reduxjs/toolkit';

export type ISignInFormData = {
  identifier: string;
  password: string;
};

interface LoadingState {
  status: 'idle' | 'loading' | 'success' | 'failure';
  error?: string;
}

interface AuthState {
  loading: LoadingState;
  loggedIn: boolean;
  googleSignIn: LoadingState;
}

const initialLoadingState: LoadingState = {
  status: 'idle',
  error: undefined,
};

const initialState: AuthState = {
  loading: initialLoadingState,
  loggedIn: false,
  googleSignIn: initialLoadingState,
};

export default function Form() {
  const [errorSnackBarOpen, setErrorSnackBarOpen] = useState(false);
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [identifierError, setIdentifierError] = useState('');
  const [values, setValues] = useState<ISignInFormData>({
    identifier: '',
    password: '',
  });

  const dispatch = useAppThunkDispatch();
  const { loading, googleSignIn } = useAppSelector(({ signIn }) => signIn);
  const router = useRouter();

  const modifyIdentifier = (str: string) => {
    if (str.startsWith('0') && str.length > 0) {
      return `234${str.slice(1)}`;
    } else {
      return str;
    }
  };

  useEffect(() => {
    if (loading.status === 'failure') {
      if (localStorage.getItem('error') && localStorage) {
        const error = localStorage.getItem('error') || '';
        setIdentifierError(
          error.includes('mail') || error.includes('phone') ? error : ''
        );
        setMessage(error);
        setErrorSnackBarOpen(true);
        localStorage.setItem('error', '');
      }
    }
  }, [loading.status]);

  const params = useSearchParams();
  const isRedirect = params.get('redirect') === 'y';
  const src = params.get('src');

  useEffect(() => {
    if (isRedirect) {
      toast.error('Kindly log in');
    }
  }, [isRedirect]);

  const handleSnackbarClose = () => {
    setErrorSnackBarOpen(false);
    setSuccessSnackBarOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setMessage('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signIn(values)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        setMessage('SignIn successful');
        setSuccessSnackBarOpen(true);
        if (src) {
          router.push(src);
        } else {
          router.push('/dashboard/programs');
        }
      }
    });
  };

  const handleSignInWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const actionResult = await dispatch(signInWithGoogle(tokenResponse));
        const response = unwrapResult(actionResult);

        if (response.error && response.error.message === 'Rejected') {
          toast.error('Google Sign-In Rejected');
        } else {
          setTimeout(() => {
            router.push('dashboard/programs');
          }, 1000);
        }
      } catch (error) {
        console.error('Error signing up with Google:', error);
        toast.error('Error signing up with Google');
      }
    },
    onError: (error) => {
      console.error('Google authentication failed:', error);
      toast.error('Google authentication failed');
    },
  });

  return (
    <>
      <ErrorSnackBar
        open={errorSnackBarOpen}
        message={message || googleSignIn?.error || ''}
        handleClose={handleSnackbarClose}
      />
      <SuccessSnackBar
        open={successSnackBarOpen}
        message={message}
        handleClose={handleSnackbarClose}
      />
      <div>
        <form onSubmit={handleSubmit}>
          <div css={{ marginBottom: '2.4rem' }}>
            <BasicTextField
              label='Email, Username Or Phone'
              value={modifyIdentifier(values.identifier)}
              name='identifier'
              setValue={handleChange}
              error={identifierError}
              required
            />
          </div>
          <div css={{ marginBottom: '1.2rem', marginTop: '1rem' }}>
            <PasswordTextField
              label='Password'
              value={values.password}
              visible={passwordVisible}
              setVisible={setPasswordVisible}
              name='password'
              setValue={handleChange}
              error={loading.status === 'failure' ? loading.error : undefined}
              required
            />
          </div>
          <div
            css={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '3rem',
            }}
          >
            <Link
              href='/auth/forgotPassword'
              css={{
                fontWeight: 700,
                color: '#7C35AB',
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Forgot Password?
            </Link>
          </div>
          <div>
            <ButtonFormFilled disabled={loading.status === 'loading'}>
              {loading.status === 'loading' ? (
                <TailSpin
                  height={20}
                  width={20}
                  color='#FFF'
                  ariaLabel='loading'
                  radius={'2'}
                />
              ) : (
                'LOG IN'
              )}
            </ButtonFormFilled>
          </div>
        </form>

        <p
          css={{
            margin: '2rem 0',
            textAlign: 'center',
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          OR
        </p>
        <div css={{ width: '100%' }}>
          <ButtonFormOutline
            onClick={() => handleSignInWithGoogle()}
            disabled={googleSignIn.status === 'loading'}
          >
            {googleSignIn.status === 'loading' ? (
              <TailSpin
                height={20}
                width={20}
                color='#7C35AB'
                ariaLabel='loading'
                radius={'2'}
              />
            ) : (
              <>
                <p css={{ marginTop: '4px' }}>
                  <Image
                    src='/assets/svgs/google.svg'
                    alt='appstore'
                    width={21}
                    height={21}
                  />
                </p>
                <p>Continue With Google</p>
              </>
            )}
          </ButtonFormOutline>
        </div>
        <div css={{ marginTop: '2rem', marginBottom: '1rem' }}>
          <p css={{ fontFamily: "'Nunito', sans-serif", textAlign: 'center' }}>
            Don&apos;t Have An Account?{' '}
            <span css={{ fontWeight: 700, color: '#7C35AB' }}>
              <Link href='/auth/signup'>Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
