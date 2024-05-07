/** @jsxImportSource @emotion/react */

import { useTheme } from '@emotion/react';
import Image from 'next/image';
import React, { FormEvent, useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { H1 } from 'styles/components/typography';
import { SignInLeftcss } from 'styles/pages/auth/SignInStyles';
import { screen } from 'styles/theme';
import { Box, useMediaQuery } from '@mui/material';
import Logo from '@/components/logo';
import Link from 'next/link';
import { Button } from 'styles/components/button';
import { ButtonFormFilled } from 'styles/components/button';
import { useRouter } from 'next/router';
import { SettingsPasswordTextField } from '@/components/inputs/SettingsInput';
import { PasswordTextField } from '@/components/inputs/BasicTextField';
import { useAppSelector, useAppThunkDispatch } from 'redux/store';
import { resetPassword } from '../../../redux/auth/thunkAction';
import ErrorSnackBar from '@/components/snackbars/error';
import SuccessSnackBar from '@/components/snackbars/success';

export default function ForgotPassword() {
  const isTablet = useMediaQuery('(max-width: 900px)');
  const [errorSnackBarOpen, setErrorSnackBarOpen] = useState(false);
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [message, setMessage] = useState('');
  const [formDetails, setFormDetails] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const { loading }: { loading: any } = useAppSelector(
    ({ resetPassword }) => resetPassword
  );

  const dispatch = useAppThunkDispatch();

  const validatePassword = (password: string) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*_=+-]).{8,16}$/;
    return passwordPattern.test(password);
  };

  const validatePasswordMatch = (str1: string, str2: string) => {
    return str1 === str2;
  };

  useEffect(() => {
    setPasswordMatch(
      validatePasswordMatch(
        formDetails.newPassword,
        formDetails.confirmPassword
      )
    );
  }, [formDetails.confirmPassword]);

  useEffect(() => {
    if (formDetails.newPassword) {
      setPasswordValid(validatePassword(formDetails.newPassword));
    }
  }, [formDetails.newPassword]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage('');
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorSnackBarOpen(false);
    setSuccessSnackBarOpen(false);
  };

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.removeItem('error');
    setPasswordMatch(
      validatePasswordMatch(
        formDetails.newPassword,
        formDetails.confirmPassword
      )      
    );
    if (passwordValid && passwordMatch) {      
      dispatch(resetPassword({ newPassword: formDetails.newPassword })).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setSuccess(true);
          setSuccessSnackBarOpen(true);

           setTimeout(() => {
            router.push('/auth/signin');
          }, 1000);
        } else {
          setErrorSnackBarOpen(true);
        }
      })
      .catch((err) => {
          setErrorSnackBarOpen(true);
      });;
    }
  };

  return (
    <>
      <ErrorSnackBar
        open={errorSnackBarOpen}
        message={loading.error}
        handleClose={handleSnackbarClose}
      />
      <SuccessSnackBar
        open={successSnackBarOpen}
        message={'Successfully reset password'}
        handleClose={handleSnackbarClose}
      />
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        {!isTablet && (
          <SignInLeftcss>
            <div className='top'>
              <Image src={'/assets/svgs/phones.svg'} alt='phones' fill />
              <Logo image='/assets/pngs/logo_yt.png' />
            </div>

            <div className='btm'>
              <div>
                <H1
                  color={'#000'}
                  css={{
                    display: 'flex',
                    gap: '11px',
                    alignItems: 'center',
                    textAlign: 'left',
                    [screen.desktop]: {
                      gap: '2px',
                    },
                  }}
                >
                  <span css={{ fontSize: '1rem' }}>your</span> SOCIAL PAPERLESS
                </H1>
                <H1
                  color={'#000'}
                  css={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    textAlign: 'left',
                    [screen.desktop]: {
                      gap: '14px',
                    },
                    [screen.lg]: {
                      gap: '1.5rem',
                    },
                  }}
                >
                  <span> EVENT </span> MANAGEMENT
                </H1>
                <H1
                  color={'#000'}
                  css={{
                    textAlign: 'left',
                    marginLeft: '19.4rem',
                    fontSize: '1.25rem',
                    [screen.desktop]: {
                      marginLeft: '10rem',
                    },
                    [screen.lg]: {
                      marginLeft: '10.4rem',
                    },
                  }}
                >
                  PLATFORM
                </H1>
              </div>
              <div css={{ display: 'flex', marginTop: '1.2rem', gap: '1rem' }}>
                <button>
                  <Image
                    src='/assets/svgs/playstore.svg'
                    alt='playstore'
                    width={140}
                    height={41.18}
                  />
                </button>
                <button>
                  <Image
                    src='/assets/svgs/appstore.svg'
                    alt='appstore'
                    width={140}
                    height={41.18}
                  />
                </button>
              </div>
            </div>
          </SignInLeftcss>
        )}
        <div
          css={{
            width: '100%',
            maxHeight: '100vh',
            fontFamily: "'Nunito', sans-serif",
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <div css={{ width: isTablet ? '90%' : '45%', margin: 'auto' }}>
            {success ? (
              <>
                <div
                  css={{
                    height: isTablet ? '' : '90vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    alt='success'
                    src={'/assets/svgs/success.svg'}
                    height={107.14}
                    width={106.72}
                  />
                  <p
                    css={{
                      marginTop: '1rem',
                      fontSize: '1.3rem',
                      color: '#00d9b7',
                      fontWeight: 'bold',
                    }}
                  >
                    Successful
                  </p>
                  <div
                    css={{
                      width: isTablet ? '' : '70%',
                      textAlign: 'center',
                      marginBlock: '1.5rem',
                      fontWeight: '550',
                    }}
                  >
                    <p>Your Password Has Been Changed Successfully </p>
                  </div>
                  <Button height={'50px'} width={'50%'} fontSize={'1rem'}>
                    <Link href='/auth/signin'>LOG IN</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div
                  css={{
                    margin: isTablet ? '1.5rem 0' : '2.5rem 0',
                    cursor: 'pointer',
                  }}
                >
                  <Link href='/auth/forgotPassword'>
                    <Image
                      src='/assets/svgs/back.svg'
                      alt='back_arrow'
                      width={22}
                      height={15}
                    />
                  </Link>
                </div>
                <div
                  css={{
                    fontFamily: "'Nunito', sans-serif",
                    marginBottom: isTablet ? '3rem' : '1rem',
                  }}
                >
                  <p css={{ fontWeight: 700, fontSize: '1.5rem' }}>
                    Reset Password
                  </p>
                </div>
                <div css={{ width: isTablet ? '100%' : '100%' }}>
                  <form onSubmit={handleNext}>
                    <Box height={25} />
                    <PasswordTextField
                      label='New Password'
                      visible={confirmPasswordVisible}
                      setVisible={setConfirmPasswordVisible}
                      setValue={handleChange}
                      name='newPassword'
                      value={formDetails.newPassword}
                      error={
                        passwordValid
                          ? ''
                          : 'Kindly ensure your password has at least one capital letter, small letter, numerical and special character. It must also be at least 8 letters long'
                      }
                    />
                    <Box height={35} />
                    <PasswordTextField
                      label='Confirm New Password'
                      visible={confirmPasswordVisible}
                      setVisible={setConfirmPasswordVisible}
                      setValue={handleChange}
                      name='confirmPassword'
                      value={formDetails.confirmPassword}
                      error={
                        message.includes('match')
                          ? 'Passwords does not match'
                          : passwordMatch
                          ? ''
                          : 'Passwords do not match!'
                      }
                    />
                    <div
                      css={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '2rem',
                      }}
                    >
                      <Button height='52px' width='100%'>
                        {loading.status === "loading" ? <TailSpin
                  height={20}
                  width={20}
                  color='#FFF'
                  ariaLabel='loading'
                  radius={'2'}
                /> : <p
                          css={{
                            fontSize: '16px',
                            fontFamily: '"Nunito", sans-serif',
                          }}
                        >
                          RESET PASSWORD
                        </p>}
                      </Button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
