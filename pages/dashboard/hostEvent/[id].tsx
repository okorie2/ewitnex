/** @jsxImportSource @emotion/react */
import React, { FormEvent, useEffect, useState } from 'react';
import HostEventTextField from '@/components/inputs/hostEventTextField';
import { Button } from 'styles/components/button';
import Image from 'next/image';
import HostEventLayout from './layout';
import Link from 'next/link';
import SettingsTextField from '@/components/inputs/SettingsInput';
import { SelectChangeEvent, Tooltip } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { nanoid } from 'nanoid';
import { ICreateEvent, IEvent } from 'types/event';
import { IUserDetails } from 'types/user';
import { useRouter } from 'next/router';
import {
  createEvent,
  getEventById,
  updateEventProgram,
} from 'redux/event/thunkAction';
import { TailSpin } from 'react-loader-spinner';
import { useAppSelector, useAppThunkDispatch } from 'redux/store';
import _ from 'lodash';
import { useSearchParams } from 'next/navigation';

const HostEvent = () => {
  const isTablet = useMediaQuery('(max-width: 780px)');
  const [organizerInputOpen, setOrganizerInputOpen] = useState(false);
  const [data, setdata] = useState('');
  const [audienceState, setAudienceState] = useState('public');
  const params = useSearchParams();
  const editEvent = params.get('editEvent');
  const [user, setUser] = useState<any>();
  const [createEventData, setCreateEventData] = useState<ICreateEvent>();

  const router = useRouter();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    // setCreateEventData(
    //   JSON.parse(localStorage.getItem('createEventData') || '{}')
    // );
  }, []);

  const [organizersArray, setOrganizersArray] = useState([
    { user_id: '', user_name: '' },
  ]);

  const [formData, setFormData] = useState<any>({
    title: '',
    organizersId: [],
    eventTypeId: 0,
    eventCategoryId: 0,
    isPublic: audienceState === 'public' ? true : false,
    about: '',
  });

  const [eventID, setEventID] = useState('');
  const { event } = useAppSelector(({ event }) => event);
  const [_event, setEvent] = useState<IEvent>();

  useEffect(() => {
    setFormData({
      ...formData,
      organizersId: user ? [user?.data?.id] : '{}',
    });
  }, [user]);

  useEffect(() => {
    if (editEvent === 'y') {
      dispatch(getEventById(eventID.toString())).then(
        (res: { meta: { requestStatus: string } }) => {
          if (res.meta.requestStatus == 'fulfilled') {
            setEvent(event);
          }
        }
      );
    }
  }, [eventID, editEvent]);

  useEffect(() => {
    setFormData({
      ...formData,
      isPublic: audienceState === 'public' ? true : false,
    });
  }, [audienceState]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    if (name === 'eventTypeId') {
      const valueToNumber: Number = parseInt(value);
      setFormData({ ...formData, [name]: valueToNumber });
    } else if (name === 'eventCategoryId') {
      const valueToNumber: Number = parseInt(value);
      setFormData({ ...formData, [name]: valueToNumber });
    } else if (name === 'organizersId') {
      setFormData({
        ...formData,
        organizersId: [...formData.organizersId, value],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (data.length > 4) {
        setOrganizersArray([
          ...organizersArray,
          { user_id: nanoid(), user_name: data },
        ]);
        setdata('');
        setOrganizerInputOpen(false);
      }
    }
  };

  const handleAddOrganizer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (organizerInputOpen) {
      if (data.length > 4) {
        setOrganizersArray([
          ...organizersArray,
          { user_id: nanoid(), user_name: data },
        ]);
        setdata('');
        setOrganizerInputOpen(false);
      }
    } else {
      setOrganizerInputOpen(true);
    }
  };

  const handleDeleteOrganizer = (id: string) => {
    const organizersArrayCopy = organizersArray;
    const filtered = organizersArrayCopy.filter(
      (organizer) => organizer.user_id !== id
    );
    setOrganizersArray(filtered);
  };

  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ hostEvent }) => hostEvent);

  // useEffect(() => {
  //   if (_event) {
  //     setEvent({
  //       ..._event,
  //       EventTitle: formData.EventTitle,
  //       OrganizedBy: formData?.organizedBy || '',
  //       interests: formData.interests,
  //       category: formData.category,
  //       isPublic: formData.isPublic,
  //       description: formData.description,
  //     });
  //   }
  // }, [formData]);

  // console.log(editEvent)

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(router.query.id);
    //   if (_event) {

    dispatch(updateEventProgram({ formData, eventId: router.query?.id }));
    // .then(
    //   (res) => {
    //     if (res.meta.requestStatus == 'fulfilled') {
    //       console.log(res)
    //       // localStorage.setItem('createEventData', JSON.stringify(formData));
    //       // localStorage.setItem('currenteventID', eventID);
    //       // router.push('/dashboard/hostEvent/fileUpload');
    //     }
    //   }
    // ))

    //     dispatch(updateEvent({ eventId: eventID, formData: _event })).then(
    //       (res) => {
    //         if (res.meta.requestStatus == 'fulfilled') {
    //           localStorage.setItem('createEventData', JSON.stringify(formData));
    //           localStorage.setItem('currenteventID', eventID);
    //           router.push('/dashboard/hostEvent/fileUpload');
    //         }
    //       }
    //     );
    //   }
    // } else {
    //   dispatch(createEvent(formData)).then((res) => {
    //     if (res.meta.requestStatus == 'fulfilled') {
    //       localStorage.setItem('createEventData', JSON.stringify(formData));
    //       sessionStorage.removeItem('performers');
    //       sessionStorage.removeItem('tickets');
    //       localStorage.removeItem('fileUploadData');
    //       localStorage.removeItem('eventLocationData');
    //       router.push('/dashboard/hostEvent/fileUpload');
    //     }
    //   });
  };

  const handleDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // localStorage.removeItem('error');
    // dispatch(createEvent(formData)).then((res) => {
    //   if (res.meta.requestStatus == 'fulfilled') {
    //     router.push('/dashboard/manager');
    //   }
    // });
  };

  return (
    <HostEventLayout>
      <div css={{ width: isTablet ? '100vw' : '' }}>
        <div
          css={{
            height: '110px',
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
            <div>
              <h1 css={{ fontSize: '1.875rem' }}>Event Program Info</h1>
              <p>Tell invitees the type of event you are hosting</p>
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
          css={{
            maxHeight: isTablet ? '' : 'calc(100vh - 110px)',
            padding: isTablet ? '1rem' : ' 1.5rem 3.2rem',
            display: 'grid',
            gap: '1.5rem',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          onSubmit={handleNext}
        >
          <HostEventTextField
            label='Event Title'
            placeholder='Name of event'
            type='text'
            name='title'
            value={formData.title}
            setValue={handleChange}
            required
          />
          <div css={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <p
              css={{
                fontWeight: 'bold',
                display: 'flex',
                gap: '0.3rem',
                alignItems: 'center',
              }}
            >
              Organized by
            </p>
            <Tooltip title='This describes a unique organizer and shows all of the events on one page'>
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
              display: 'flex',
              gap: '1.2rem',
              alignItems: 'center',
              marginTop: organizerInputOpen ? '-3.8%' : '-2.8%',
              paddingBlock: '1%',
              flexWrap: 'wrap',
            }}
          >
            {organizersArray.map((organizer, index) => {
              return (
                <div
                  key={index}
                  css={{
                    width: isTablet ? '90vw' : '250px',
                    position: 'relative',
                    height: '48px',
                    paddingLeft: '2%',
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${'#AEAEAE'}`,
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                >
                  {index === 0 ? 'me' : organizer.user_name}
                  <div
                    css={{
                      position: 'absolute',
                      padding: '2px 4px',
                      border: '1px solid #AEAEAE',
                      right: '-4%',
                      top: '33%',
                      borderRadius: '50%',
                      background: 'white',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                    onClick={() =>
                      handleDeleteOrganizer(organizer.user_id || '')
                    }
                  >
                    <Image
                      src={'/assets/svgs/trash-red.svg'}
                      alt=''
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
              );
            })}
            <div
              css={{
                width: '250px',
                maxWidth: isTablet ? '90vw' : '50%',
                position: 'relative',
                display: organizerInputOpen ? 'block' : 'none',
                marginBottom: '-0.4%',
              }}
            >
              <SettingsTextField
                label={''}
                value={data}
                placeholder={"Organizer's Ewitnex username"}
                setValue={(e) => setdata(e.target.value)}
                handleKeyDown={handleKeyDown}
              />
              <div
                css={{
                  position: 'absolute',
                  padding: '2px 4px',
                  border: '1px solid #AEAEAE',
                  right: '-4%',
                  top: '33%',
                  borderRadius: '50%',
                  background: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                }}
                onClick={() => setOrganizerInputOpen(false)}
              >
                <Image
                  src={'/assets/svgs/trash-red.svg'}
                  alt=''
                  width={15}
                  height={15}
                />
              </div>
            </div>
            <button
              css={{
                fontSize: '0.875rem',
                fontWeight: 'bold',
                color: '#7C35AB',
                border: `1px solid ${'#7C35AB'}`,
                minWidth: '172px',
                height: '38px',
                marginBottom: '0.4rem',
                background: '#fff',
                cursor: 'pointer',
              }}
              onClick={handleAddOrganizer}
            >
              {organizerInputOpen
                ? 'Add organizer'
                : organizersArray.length === 0
                ? 'Add organizer'
                : 'Add another organizer'}
            </button>
          </div>
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
              gap: '2.5rem',
            }}
          >
            <HostEventTextField
              label='Event Type'
              placeholder='none'
              type='select'
              name='eventTypeId'
              value={formData.eventTypeId}
              required
              image='/assets/svgs/info2.svg'
              tooltip='Select the type of event from this list. This helps ticket buyers find your event.'
              options={[
                { value: '0', label: 'Select event' },
                { value: '1', label: 'Social' },
                { value: '2', label: 'Cultural' },
                { value: '3', label: 'Educational' },
                { value: '4', label: 'Fundraising' },
                { value: '5', label: 'Business' },
                { value: '6', label: 'Sports' },
                { value: '7', label: 'Political' },
                { value: '8', label: 'Religion' },
                { value: '9', label: 'Movie' },
                { value: '10', label: 'Theatre' },
              ]}
              setValue={handleChange}
            />
            <HostEventTextField
              label='Category'
              placeholder='none'
              type='select'
              name='eventCategoryId'
              value={formData.eventCategoryId}
              required
              image='/assets/svgs/info2.svg'
              tooltip='Select an event category from this list. This helps ticket buyers find your event.'
              options={[
                { value: '0', label: 'Select category' },
                { value: '1', label: 'Wedding' },
                { value: '2', label: 'Tech' },
                { value: '3', label: 'Sports and Fitness' },
                { value: '4', label: 'Conference' },
                { value: '5', label: 'Music' },
              ]}
              setValue={handleChange}
            />
          </div>
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2.5rem',
            }}
          >
            <div>
              <div
                css={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <p
                  css={{
                    fontWeight: 'bold',
                    display: 'flex',
                    gap: '0.3rem',
                    alignItems: 'center',
                  }}
                >
                  Audience
                </p>
                <Tooltip title='A public event can be found in search and list of events'>
                  <Image
                    src={'/assets/svgs/info2.svg'}
                    alt=''
                    width={14.02}
                    height={14.02}
                  />
                </Tooltip>
              </div>
              <div
                css={{ display: 'flex', gap: '1rem', marginBlock: '0.5rem' }}
              >
                <div
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    width: '110px',
                    height: '50px',
                    background: audienceState === 'public' ? '#7C35AB21 ' : '',
                    border:
                      audienceState === 'public'
                        ? '1px solid #7C35AB'
                        : '1px solid #AEAEAE',
                    color: audienceState === 'public' ? '#7C35AB' : '#AEAEAE',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => setAudienceState('public')}
                >
                  {audienceState === 'public' ? (
                    <Image
                      src='/assets/svgs/eye_open_purple.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src='/assets/svgs/eye_open.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                  )}
                  <p>Public</p>
                </div>
                <div
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    width: '110px',
                    height: '50px',
                    background: audienceState === 'private' ? '#7C35AB21 ' : '',
                    border:
                      audienceState === 'private'
                        ? '1px solid #7C35AB'
                        : '1px solid #AEAEAE',
                    color: audienceState === 'private' ? '#7C35AB' : '#AEAEAE',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => setAudienceState('private')}
                >
                  {audienceState === 'private' ? (
                    <Image
                      src='/assets/svgs/eye_close_purple.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src='/assets/svgs/eye_close.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                  )}
                  <p>Private</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <HostEventTextField
            label='About your event'
            placeholder='Description'
            type='textarea'
            name='about'
            value={formData.about}
            required
            setValue={handleChange}
            color='#000'
          />
          <div
            css={{
              width: isTablet ? '100%' : '80%',
              marginLeft: 'auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginTop: '1.5rem',
            }}
          >
            <button
              css={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#7C35AB',
                border: `1px solid ${'#7C35AB'}`,
                height: '52px',
                marginBottom: '0.5rem',
                background: '#fff',
                borderRadius: '26px',
                width: '100%',
                cursor: 'pointer',
              }}
              // onClick={() => handleDraft}
            >
              {/* {loading === "loading" ? (
                <div css={{ display: "flex", gap: "0.75rem" }}>
                  <p>Drafting..</p>
                  <TailSpin
                    height={15}
                    width={15}
                    color="#FFF"
                    ariaLabel="loading"
                    radius={"2"}
                  />
                </div>
              ) : (
                "SAVE TO DRAFT"
              )} */}
              SAVE TO DRAFT
            </button>
            <Button fontSize='0.9rem' height='48px' width='100%'>
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
            </Button>
          </div>
        </form>
      </div>
    </HostEventLayout>
  );
};

export default HostEvent;
