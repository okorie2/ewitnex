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
import { IReqPerformer } from 'types/event';
import { useRouter } from 'next/router';
import { addPerformer } from 'redux/event/thunkAction';
import { useAppThunkDispatch, useAppSelector } from 'redux/store';
import { TailSpin } from 'react-loader-spinner';

const AddSpeakerForm = ({
  speakerRef,
  setGetPerformers,
  handleModalClose,
  onSubmit,
}: {
  speakerRef: RefObject<HTMLInputElement>;
  setGetPerformers: React.Dispatch<React.SetStateAction<boolean>>;
  handleModalClose?: () => void;
  onSubmit?: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [newSpeakerRef, setNewSpeakerRef] = useState(speakerRef);
  const isTablet = useMediaQuery('(max-width: 780px)');
  const [formData, setFormData] = useState<any>({
    newPerformers: [
      {
        nameOfPerformer: '',
        performerTitle: '',
        performerRole: '',
        aboutPerformer: '',
        willBePerformers: '',
      },
    ],
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
      localStorage.setItem('performerImage', formData);
      event.target.files = null;
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      newPerformers: [{ ...formData.newPerformers[0], [name]: value }],
    });
    // localStorage.setItem([name], formData);
  };

  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ hostEvent }) => hostEvent);
  const [eventID, setEventID] = useState('');
  useEffect(() => {
    setEventID(localStorage.getItem('currenteventID') || '');
  }, []);

  // const handleSubmit = event => {
  //   props.onSubmit(formData)
  // }

  // onSubmit(formData);

  const handleNext = () => {
    // event.preventDefault();
    // console.log(formData)
    // props.handleSubmit(formData)
    // event.preventDefault();
    // const form = new FormData();
    // form.append('newPerformers', JSON.stringify(formData.newPerformers));
    // form.append('performerImage', formData.performerImage || '');
    // console.log(form)
    // dispatch(addPerformer({ eventID, form })).then((res) => {
    //   if (res.meta.requestStatus == 'fulfilled') {
    //     setFormData({
    //       newPerformers: [
    //         {
    //           nameOfPerformer: '',
    //           performerTitle: '',
    //           performerRole: '',
    //           aboutPerformer: '',
    //           willBePerformers: ''
    //         },
    //       ],
    //       performerImage: undefined,
    //     });
    //     setGetPerformers((prevState: boolean) => !prevState);
    //     if (newSpeakerRef.current != null) {
    //       newSpeakerRef.current.focus();
    //     }
    //     if (isTablet) {
    //       handleModalClose && handleModalClose();
    //     }
    //   }
    // });
  };

  return (
    <form onSubmit={handleNext}>
      <div css={{ display: 'grid', gap: '1.5rem' }}>
        <HostEventTextField
          label='Does this event have performers and will like to be shown in the program?'
          placeholder='Yes'
          type='select'
          options={[
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
          ]}
          setValue={handleChange}
          value={formData.willBePerformers}
        />
        <HostEventTextField
          label='Name of performer'
          placeholder='Enter full name'
          type='text'
          name='nameOfPerformer'
          ref={newSpeakerRef}
          value={formData.newPerformers[0].nameOfPerformer}
          setValue={handleChange}
          required
        />
        <HostEventTextField
          label='Performer Title'
          placeholder='Software Engineer at Ewitnex'
          type='text'
          name='performerTitle'
          value={formData.newPerformers[0].performerTitle}
          setValue={handleChange}
          required
        />
        <HostEventTextField
          label='About Performer'
          placeholder='Tell attendees more about this speaker'
          type='textarea'
          value={formData.newPerformers[0].aboutPerformer}
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
                    {formData.performerImage?.name}
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
          {loading.status === 'loading' ? (
            <TailSpin
              height={15}
              width={15}
              color='#7c35ab'
              ariaLabel='loading'
              radius={'2'}
            />
          ) : (
            'Add Performer'
          )}
        </button>
      </div>
    </form>
  );
};

export default AddSpeakerForm;
