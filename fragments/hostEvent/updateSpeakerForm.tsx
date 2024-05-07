/** @jsxImportSource @emotion/react */

import HostEventTextField from '@/components/inputs/hostEventTextField';
import Image from 'next/image';
import { SelectChangeEvent, useMediaQuery } from '@mui/material';
import {
  ChangeEvent,
  FormEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IPerformer, IReqPerformer } from 'types/event';
import { useRouter } from 'next/router';
import { updatePerformer } from 'redux/event/thunkAction';
import { useAppThunkDispatch, useAppSelector } from 'redux/store';
import { TailSpin } from 'react-loader-spinner';

const UpdateSpeakerForm = ({
  setGetPerformers,
  handleModalClose,
  id,
}: {
  setGetPerformers?: React.Dispatch<React.SetStateAction<boolean>>;
  handleModalClose?: () => void;
  id: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isTablet = useMediaQuery('(max-width: 780px)');
  const [formData, setFormData] = useState<{
    nameOfPerformer: string;
    performerTitle: string;
    performerRole: string;
    aboutPerformer: string;
    performerImage: File | null | undefined;
  }>({
    nameOfPerformer: '',
    performerTitle: '',
    performerRole: '',
    aboutPerformer: '',
    performerImage: null,
  });
  const handleImageClick = () => {
    if (inputRef.current != null) {
      inputRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileObj = event.target.files[0];
      setFormData({ ...formData, performerImage: fileObj });
      event.target.files = null;
    }
  };
  const { event: selectEvent, loading } = useAppSelector(({ event }) => event);
  const [selectedPerformer, setSelectedPerformer] = useState({
    aboutPerformer: '',
    nameOfPerformer: '',
    performerImage: '',
    performerRole: '',
    performerTitle: '',
    _id: '',
  });
  useEffect(() => {
    if (selectEvent) {
      let performers = selectEvent.performers;
      const selected = performers.filter((performer) => performer._id === id);
      setSelectedPerformer(selected[0]);
    }
  }, [selectEvent]);
  useEffect(() => {
    setFormData({
      nameOfPerformer: selectedPerformer.nameOfPerformer,
      performerTitle: selectedPerformer.performerTitle,
      performerRole: selectedPerformer.performerRole,
      aboutPerformer: selectedPerformer.aboutPerformer,
      performerImage: null,
    });
  }, [selectedPerformer]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dispatch = useAppThunkDispatch();
  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData();
    form.append('performerImage', formData.performerImage || '');
    form.append('nameOfPerformer', formData.nameOfPerformer);
    form.append('performerTitle', formData.performerTitle);
    form.append('performerRole', formData.performerRole);
    form.append('aboutPerformer', formData.aboutPerformer);
    dispatch(
      updatePerformer({ eventID: selectEvent._id, performerId: id, form })
    ).then((res) => {
      if (res.meta.requestStatus == 'fulfilled') {
        setFormData({
          nameOfPerformer: '',
          performerTitle: '',
          performerRole: '',
          aboutPerformer: '',
          performerImage: undefined,
        });
        if (setGetPerformers) {
          setGetPerformers((prevState: boolean) => !prevState);
        }
        handleModalClose && handleModalClose();
      }
    });
  };

  return (
    <form
      onSubmit={handleNext}
      css={{
        width: '95%',
        margin: '0 auto',
      }}
    >
      <div css={{ display: 'grid', gap: '1.5rem' }}>
        <HostEventTextField
          label='Name of performer'
          placeholder='Enter full name'
          type='text'
          name='nameOfPerformer'
          value={formData.nameOfPerformer}
          setValue={handleChange}
          required
        />
        <HostEventTextField
          label='Performer Title'
          placeholder='Software Engineer at Ewitnex'
          type='text'
          name='performerTitle'
          value={formData.performerTitle}
          setValue={handleChange}
          required
        />
        <HostEventTextField
          label='Performing Role'
          placeholder='Host'
          value={formData.performerRole}
          name='performerRole'
          type='select'
          options={[
            { value: 'Host', label: 'Host' },
            { value: 'Speaker', label: 'Speaker' },
            { value: 'Artiste', label: 'Artiste' },
            { value: 'Preacher', label: 'Preacher' },
            { value: 'Anchor', label: 'Anchor' },
            { value: 'Celebrant', label: 'Celebrant' },
            { value: 'Comedian', label: 'Comedian' },
            { value: 'Others', label: 'Others' },
          ]}
          setValue={handleChange}
          required
        />
        <HostEventTextField
          label='About Performer'
          placeholder='Tell attendees more about this speaker'
          type='textarea'
          value={formData.aboutPerformer}
          name='aboutPerformer'
          setValue={handleChange}
          color='#000'
          required
        />
        <div>
          <p
            css={{
              fontWeight: 'bold',
            }}
          >
            Performer&apos;s Image(Optional)
          </p>
          <div
            css={{
              width: '155px',
              height: '200px',
              border: `1px dashed ${'#C0C0C0'}`,
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: '0.5rem',
              ':hover': {
                border: `1px dashed ${'#7C35AB'}`,
              },
            }}
          >
            <div
              css={{
                color: '#AEAEAE',
                fontSize: '0.75rem',
                width: '80%',
                cursor: 'pointer',
              }}
              onClick={handleImageClick}
            >
              <input
                type='file'
                css={{ display: 'none' }}
                onChange={handleFileChange}
                ref={inputRef}
              />
              <Image
                src='/assets/svgs/image.svg'
                alt=''
                width={26.44}
                height={30.85}
              />
              {formData.performerImage ? (
                <>
                  <p css={{ fontSize: '1rem' }}>
                    {formData.performerImage.name}
                  </p>
                  <p>Click to change uploaded file</p>
                </>
              ) : (
                <>
                  <input
                    type='file'
                    css={{ display: 'none' }}
                    onChange={handleFileChange}
                    ref={inputRef}
                    accept='image/*'
                  />

                  <p>
                    Tap or drag files to this area to upload PNG, JPG files
                    format
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
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
            width: isTablet ? '80%' : '45%',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {loading === 'loading' ? (
            <TailSpin
              height={15}
              width={15}
              color='#7c35ab'
              ariaLabel='loading'
              radius={'2'}
            />
          ) : (
            'Update Performer'
          )}
        </button>
      </div>
    </form>
  );
};

export default UpdateSpeakerForm;
