/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, FormEvent, useRef } from 'react';
import HostEventLayout from './layout';
import Link from 'next/link';
import { screen } from 'styles/theme';
import HostEventTextField from '@/components/inputs/hostEventTextField';
import HostEventSplitInput from '@/components/inputs/HostEventSplitInput';
import Image from 'next/image';
import { SelectChangeEvent, Tooltip } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import StyledCheckbox from '@/components/inputs/StyledCheckbox';
import { ILocation } from 'pages/auth/signup/form';
import { useRouter } from 'next/router';
import { useAppSelector, useAppThunkDispatch } from 'redux/store';
import { eventLocation } from 'redux/event/thunkAction';
import { IEventLocation } from 'types/event';
import { TailSpin } from 'react-loader-spinner';
import toast from 'react-hot-toast';

const EventLocation = () => {
  const isTablet = useMediaQuery('(max-width: 780px)');
  const [locationType, setLocationType] = useState('Physical');
  const [undecided, setUndecided] = useState(false);
  const [endUndecided, setEndUndecided] = useState(false);
  const [isManualInputFocused, setIsManualInputFocused] = useState(false);
  useEffect(() => {
    setEndUndecided(undecided);
  }, [undecided]);

  const [_startDate, setStartDate] = useState('');
  const [_endDate, setEndDate] = useState('');

  const [formData, setFormData] = useState<any>({
    locationType: locationType === 'Physical' ? 'Physical' : 'Online',
    startDate: _startDate || '',
    endDate: _endDate || '',
  });

  const [manualLocation, setManualLocation] = useState(false);

  const [liveLocation, setLiveLocation] = useState({
    searchLocation: '',
    enterLocation: '',
  });
  const [onlineLocation, setOnlineLocation] = useState({
    selectHost: '',
    hostUrl: '',
  });

  const [cities, setCities] = useState<ILocation>();

  useEffect(() => {
    const searchedCities = async () => {
      const res = await fetch(
        `https://api.teleport.org/api/cities/?search=${liveLocation.searchLocation}`
      );
      const data = await res.json();
      setCities(data._embedded['city:search-results']);
    };
    searchedCities().catch((error) => console.error(error));
  }, [liveLocation.searchLocation]);

  useEffect(() => {
    setFormData({
      ...formData,
      locationType: locationType === 'Physical' ? 'Physical' : 'Online',
      startDate: _startDate,
      endDate: _endDate,
    });
  }, [locationType, _startDate, _endDate]);

  const [eventLocationData, setEventLocationData] = useState<IEventLocation>();
  useEffect(() => {
    setEventLocationData(
      JSON.parse(localStorage.getItem('eventLocationData') || '{}')
    );
  }, []);

  useEffect(() => {
    setFormData({
      ...formData,
      type: eventLocationData?.type || formData.type,
      startDate: eventLocationData?.startDate || formData.startDate,
      endDate: eventLocationData?.endDate || formData.endDate,
    });

    if (eventLocationData && eventLocationData?.startDate === '') {
      setUndecided(true);
    }
    if (eventLocationData && eventLocationData?.endDate === '') {
      setEndUndecided(true);
    }
    setLiveLocation({
      ...liveLocation,
      searchLocation:
        eventLocationData?.searchLocation || liveLocation.searchLocation,
      enterLocation:
        eventLocationData?.enterLocation || liveLocation.enterLocation,
    });
    setOnlineLocation({
      ...onlineLocation,
      selectHost: eventLocationData?.selectHost || onlineLocation.selectHost,
      hostUrl: eventLocationData?.hostUrl || onlineLocation.hostUrl,
    });
  }, [eventLocationData]);

  const handleLiveLocationChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setLiveLocation({ ...liveLocation, [name]: value });
  };
  const handleOnlineLocationChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setOnlineLocation({ ...onlineLocation, [name]: value });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      address: {
        name: !manualLocation
          ? liveLocation.searchLocation
          : liveLocation.enterLocation,
        lat: 2.4,
        long: -2.1,
      },
    });
  }, [liveLocation, onlineLocation]);

  useEffect(() => {
    if (undecided) {
      setFormData({ ...formData, endDate: '', startDate: '' });
    }
    if (endUndecided) {
      setFormData({ ...formData, endDate: '' });
    }
  }, [endUndecided, undecided]);

  const router = useRouter();
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ hostEvent }) => hostEvent);
  const [eventID, setEventID] = useState('');
  useEffect(() => {
    setEventID(localStorage.getItem('currenteventID') || '');
  }, []);

  useEffect(() => {
    if (localStorage.getItem('currenteventID') === null) {
      toast.error('No current event');
      router.push('/dashboard/hostEvent');
    }
  }, [eventID]);

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      ...formData,
      startDate:
        new Date(formData.startDate) instanceof Date
          ? new Date(formData.startDate).toISOString()
          : new Date(formData.startDate),
      endDate:
        new Date(formData.endDate) instanceof Date
          ? new Date(formData.endDate).toISOString()
          : new Date(formData.endDate),
    });  

    localStorage.setItem('eventLocationData', JSON.stringify(formData));

    dispatch(eventLocation({ eventID, location: formData })).then((res) => {
      if (res.meta.requestStatus == 'fulfilled') {
        router.push('/dashboard/hostEvent/speakers');
      }
    });
  };

  return (
    <HostEventLayout>
      <div css={{ width: isTablet ? '100vw' : '' }}>
        <div
          css={{
            height: isTablet ? '170px' : '150px',
            borderBottom: isTablet ? '' : `1px solid ${'#E4E4E4'}`,
            display: 'flex',
            alignItems: 'center',
            paddingInline: isTablet ? '1rem' : '3.2rem',
          }}
        >
          <div
            css={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <div
              css={{
                width: '43%',
                [screen.desktopLg]: {
                  width: '50%',
                },
                [screen.desktop]: {
                  width: isTablet ? '100%' : '70%',
                },
              }}
            >
              <h1 css={{ fontSize: isTablet ? '1.6rem' : '1.875rem' }}>
                Location, Date and Time
              </h1>
              <p css={{ fontSize: isTablet ? '0.875rem' : '' }}>
                Tell us where your event will take place and create your date
                and time for your event telling attendees when its going to
                start and ends
              </p>
            </div>
            {!isTablet && (
              <div
                css={{
                  display: 'flex',
                  gap: '2rem',
                }}
              >
                <p
                  css={{
                    color: '#7C35AB',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  Preview
                </p>
                <Link
                  href='/dashboard'
                  css={{
                    color: '#F05E78',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </Link>
              </div>
            )}
          </div>
        </div>
        <form
          onSubmit={handleNext}
          css={{
            maxHeight: isTablet ? '' : 'calc(100vh - 150px)',
            padding: isTablet ? '0rem 1rem' : ' 1.5rem 3.2rem',
            display: 'grid',
            gap: '1.5rem',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <div css={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <p
              css={{
                fontWeight: 'bold',
                display: 'flex',
                gap: '0.3rem',
                alignItems: 'center',
              }}
            >
              Location
            </p>
            <Tooltip title='Spread awareness about your event among attendees and ensure they are well informed about the designated venue'>
              <Image
                src={'/assets/svgs/info2.svg'}
                alt=''
                width={14.02}
                height={14.02}
              />
            </Tooltip>
          </div>
          <div css={{ display: 'flex', gap: '1rem', marginTop: '-1%' }}>
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                width: '110px',
                height: '50px',
                background: locationType === 'Physical' ? '#7C35AB21 ' : '',
                border:
                  locationType === 'Physical'
                    ? '1px solid #7C35AB'
                    : '1px solid #AEAEAE',
                color: locationType === 'Physical' ? '#7C35AB' : '#AEAEAE',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={() => setLocationType('Physical')}
            >
              <p>Venue</p>
            </div>
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                width: '110px',
                height: '50px',
                background: locationType === 'Online' ? '#7C35AB21 ' : '',
                border:
                  locationType === 'Online'
                    ? '1px solid #7C35AB'
                    : '1px solid #AEAEAE',
                color: locationType === 'Online' ? '#7C35AB' : '#AEAEAE',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={() => setLocationType('Online')}
            >
              <p>Online</p>
            </div>
          </div>

          {locationType === 'Online' ? (
            <div
              css={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: isTablet ? '1fr' : '30% 68%',
              }}
            >
              <HostEventTextField
                label='Online Medium'
                placeholder='none'
                image={'/assets/svgs/info2.svg'}
                tooltip='Select from the dropdown the online medium the event will use to take place and paste medium link'
                type='select'
                required={locationType === 'Online'}
                setValue={handleOnlineLocationChange}
                value={onlineLocation.selectHost}
                name='onlineMedia'
                options={[
                  { value: 'none', label: 'Select an online medium' },
                  { label: 'Ewitnex', value: 'Ewitnex' },
                  { label: 'Zoom', value: 'Zoom' },
                  { label: 'Google Meet', value: 'Google Meet' },
                  { label: 'Microsoft Teams', value: 'Microsoft Teams' },
                ]}
              />
              <div css={{ alignSelf: 'self-end', marginTop: '-2%' }}>
                <HostEventTextField
                  placeholder='Paste medium links to live streams'
                  type='text'
                  name='liveStreamUrl'
                  value={onlineLocation.hostUrl}
                  setValue={handleOnlineLocationChange}
                  required={locationType === 'Online'}
                />
              </div>
            </div>
          ) : (
            <>
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <p
                  css={{
                    fontWeight: 'bold',
                    display: 'flex',
                    gap: '0.3rem',
                    alignItems: 'center',
                  }}
                >
                  Address
                </p>
                <Tooltip title='Spread for the event address/venue. You can also enter an address manually'>
                  <Image
                    src={'/assets/svgs/info2.svg'}
                    alt=''
                    width={14.02}
                    height={14.02}
                  />
                </Tooltip>
              </div>
              <div
                css={{
                  display: isTablet ? 'grid' : 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-end',
                  marginTop: '-1.5%',
                }}
              >
                <div
                  css={{
                    borderRadius: '10px',
                    width: '100%',
                    height: '3.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${'#AEAEAE'}`,
                    paddingLeft: '17px',
                    gap: '2%',
                  }}
                >
                  <div css={{ marginTop: '3px' }}>
                    <Image
                      src='/assets/svgs/search.svg'
                      width={14.42}
                      height={14.41}
                      alt='logo'
                    />
                  </div>
                  <input
                    placeholder={
                      manualLocation
                        ? 'Enter the address or venue'
                        : 'Search for the address or venue'
                    }
                    type={'text'}
                    required={locationType === 'Physical'}
                    name={manualLocation ? 'enterLocation' : 'searchLocation'}
                    value={
                      manualLocation
                        ? liveLocation.enterLocation
                        : liveLocation.searchLocation
                    }
                    onFocus={() => setIsManualInputFocused(true)}
                    // onBlur = {() => }
                    onChange={handleLiveLocationChange}
                    css={{
                      height: '3.2rem',
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '10px',
                      border: 'none',
                      fontSize: '14px',
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  />
                </div>
                <div
                  css={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
                >
                  <p
                    css={{
                      color: '#AEAEAE',
                      fontSize: '1.125rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                    }}
                  >
                    or
                  </p>
                  <div
                    css={{
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      color: '#7C35AB',
                      border: `1px solid ${'#7C35AB'}`,
                      width: '250px',
                      height: '38px',
                      marginBottom: '0.5rem',
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() => setManualLocation(!manualLocation)}
                  >
                    {manualLocation
                      ? 'Search Location'
                      : 'Enter location manually'}
                  </div>
                </div>
              </div>
              {cities?.length !== undefined &&
                cities?.length > 0 &&
                liveLocation.searchLocation.length > 0 &&
                isManualInputFocused &&
                !manualLocation && (
                  <div
                    css={{
                      height: 'fit-content',
                      maxHeight: '8rem',
                      width: '100%',
                      border: '1px solid #AEAEAE',
                      paddingInline: '0',
                      paddingBlock: '0.2rem',
                      overflowY: 'auto',
                      marginBottom: '2rem',
                    }}
                  >
                    {cities.map((city, idx) => (
                      <p
                        key={idx}
                        css={{
                          fontFamily: "'Nunito', sans-serif",
                          padding: '0.5rem',
                          paddingLeft: '0.5rem',
                          fontSize: '1rem',
                          cursor: 'pointer',
                          ':hover': {
                            background: '#7c35ab',
                            color: '#FFF',
                          },
                        }}
                        onClick={() => {
                          console.log('set');
                          setIsManualInputFocused(false);
                          setLiveLocation({
                            ...liveLocation,
                            searchLocation: city?.matching_full_name,
                          });
                        }}
                      >
                        {city?.matching_full_name}
                      </p>
                    ))}
                  </div>
                )}
            </>
          )}
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              [screen.lg]: {
                gridTemplateColumns: '1fr',
              },
              [screen.desktop]: {
                gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
              },
            }}
          >
            <>
              <div css={{ display: 'grid' }}>
                <HostEventSplitInput
                  label='Start At'
                  placeholder1='Start Date'
                  placeholder2='Start time'
                  input2={true}
                  disabled={undecided}
                  setParentValue={setStartDate}
                />
                <div css={{ display: 'flex', alignItems: 'center' }}>
                  <StyledCheckbox
                    checked={undecided}
                    onChange={() => setUndecided(!undecided)}
                  />
                  <label
                    htmlFor='undecided'
                    css={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      marginLeft: '0.5rem',
                    }}
                  >
                    Start Time & Date - To be decided
                  </label>
                </div>
              </div>
              <div>
                <HostEventSplitInput
                  label='End At'
                  placeholder1='End Date'
                  placeholder2='End time'
                  input2={true}
                  disabled={endUndecided}
                  setParentValue={setEndDate}
                />
                <div css={{ display: 'flex', alignItems: 'center' }}>
                  <StyledCheckbox
                    checked={endUndecided}
                    disabled={undecided}
                    onChange={() => setEndUndecided(!endUndecided)}
                  />
                  <label
                    htmlFor='undecided'
                    css={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      marginLeft: '0.5rem',
                    }}
                  >
                    End Time & Date - To be decided
                  </label>
                </div>
              </div>
            </>
          </div>
          <div
            css={{
              width: isTablet ? '100%' : '80%',
              marginLeft: 'auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.6rem',
              marginTop: '1.5rem',
            }}
          >
            <Link href='/dashboard/hostEvent/fileUpload'>
              <button
                css={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  fontFamily: "'Nunito', sans-serif",
                  color: '#7C35AB',
                  border: `1px solid ${'#7C35AB'}`,
                  height: '52px',
                  marginBottom: '0.5rem',
                  background: '#fff',
                  borderRadius: '26px',
                  width: '100%',
                  cursor: 'pointer',
                }}
              >
                SAVE & RETURN
              </button>
            </Link>
            <button
              css={{
                fontSize: '1rem',
                fontWeight: 'bold',
                fontFamily: "'Nunito', sans-serif",
                color: '#fff',
                border: `1px solid ${'#7C35AB'}`,
                height: '52px',
                marginBottom: '0.5rem',
                background: '#7C35AB',
                borderRadius: '26px',
                width: '100%',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {loading.status === 'loading' ? (
                <TailSpin
                  height={15}
                  width={15}
                  color='#FFF'
                  ariaLabel='loading'
                  radius={'2'}
                />
              ) : (
                'SAVE AND CONTINUE'
              )}
            </button>
          </div>
        </form>
      </div>
    </HostEventLayout>
  );
};

export default EventLocation;
