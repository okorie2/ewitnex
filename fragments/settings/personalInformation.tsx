/** @jsxImportSource @emotion/react */

import SettingsCard from '@/components/cards/settingsCard';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SettingsFormCard from '@/components/cards/setingsFormCard';
import { useMediaQuery } from '@mui/material';
import SettingsModal from '@/components/modals/settingsModal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IUserDetails } from 'types/user';

const PersonalInformation = () => {
  const isTablet = useMediaQuery('(max-width: 780px)');
  const [activeModal, setActiveModal] = useState('');
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const handleSettingsModalOpen = (id: string) => {
    setSettingsModalOpen(!settingsModalOpen);
    setActiveModal(id);
  };
  const router = useRouter();
  useEffect(() => {
    if (isTablet) {
      const refuseBackButton = () => {
        window.onpopstate = () => {
          router.push(router.pathname);
        };
      };
      if (settingsModalOpen) {
        refuseBackButton();
      } else {
        window.onpopstate = () => {
          router.push('/dashboard/settings');
        };
      }
    }
  }, [settingsModalOpen]);
  const [user, setUser] = useState<IUserDetails>();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user') || '{}'));
  }, []);
  return (
    <>
      <SettingsModal
        isOpen={settingsModalOpen}
        onRequestClose={() => handleSettingsModalOpen('')}
        activeModal={activeModal}
      />
      <div
        css={{
          height: '100vh',
        }}
      >
        <div
          css={{
            height: '80px',
            borderBottom: `1px solid ${'#E4E4E4'}`,
            display: isTablet ? 'flex' : 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'center',
            paddingInline: '1.5rem',
            paddingRight: '2.5rem',
            color: '#000',
            gap: isTablet ? '1rem' : '',
          }}
        >
          {isTablet && (
            <Link href='/dashboard/settings'>
              <div css={{ display: 'flex' }}>
                <Image
                  src='/assets/svgs/back.svg'
                  alt='back_arrow'
                  width={22}
                  height={15}
                />
              </div>
            </Link>
          )}
          <h2>Personal Information</h2>
        </div>
        <div
          css={{
            height: 'calc(100vh - 80px)',
            padding: '1.5rem',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <SettingsFormCard
            label={'Full Name'}
            cardTitle={`${user?.firstName || ''} ${user?.lastName || ''}`}
            onClick={() => handleSettingsModalOpen('fullName')}
          />
          <SettingsFormCard
            label={'Username'}
            cardTitle={user?.username || ''}
            onClick={() => handleSettingsModalOpen('userName')}
          />
          <SettingsFormCard
            label={'Phone Number'}
            cardTitleImg={
              <div css={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src='https://flagsapi.com/NG/flat/64.png'
                  alt={''}
                  height={40}
                  width={40}
                />
              </div>
            }
            cardTitle={`+234 ${user?.phoneNumber
              ?.toString()
              .split('')
              .slice(3)
              .join('')}`}
          />
          <SettingsFormCard
            label={'Email Address'}
            cardTitle={user?.email || ''}
          />
          <SettingsFormCard
            label={'Gender'}
            cardTitle={user?.gender || ''}
            onClick={() => handleSettingsModalOpen('gender')}
          />
          <SettingsFormCard
            label={'Location'}
            cardTitle={user?.city?.city || ''}
            onClick={() => handleSettingsModalOpen('location')}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
