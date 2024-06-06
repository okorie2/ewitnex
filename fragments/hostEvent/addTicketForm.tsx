/** @jsxImportSource @emotion/react */

import HostEventTextField from '@/components/inputs/hostEventTextField';
import { Box, SelectChangeEvent, useMediaQuery } from '@mui/material';
import { screen } from 'styles/theme';
import Image from 'next/image';
import { ChangeEvent, FormEvent, RefObject, useEffect, useState } from 'react';
import { IReqTicket } from 'types/event';
import { addPerformer, addTicket } from 'redux/event/thunkAction';
import { useAppThunkDispatch, useAppSelector } from 'redux/store';
import { TailSpin } from 'react-loader-spinner';

const AddTicketForm = ({
  ticketRef,
  setGetTickets,
  handleModalClose,
  onFormChange
}: {
  ticketRef: RefObject<HTMLInputElement>;
  setGetTickets: React.Dispatch<React.SetStateAction<boolean>>;
  handleModalClose?: () => void;
  onFormChange?: (formData) => void
}) => {
  const [type, setTicketType] = useState('Paid');
  const isTablet = useMediaQuery('(max-width: 780px)');
  const [newTicketRef, setNewTicketRef] = useState(ticketRef);
  const [formData, setFormData] = useState<IReqTicket>({
        type: '',
        name: '',
        price: 0,
        quantity: 0,
        feeBearer: '',
        isRefundable: '',
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;         
      if(name == "quantity")  {
         setFormData({
      ...formData,
      [name]: Number(value)
    });    
         onFormChange({
      ...formData,
      [name]: Number(value)
    })
  } else if(name == "price") { 
     setFormData({
      ...formData,
      [name]: Number(value)
    });    
       onFormChange({
      ...formData,
      [name]: Number(value)
    })} else{
       setFormData({
      ...formData,
      [name]: value
    });    

 onFormChange({
      ...formData,
      [name]: value 
    })
    }

          
  //   if(name === "isRefundable"){  
  //   onFormChange({
  //     ...formData,
  //     isRefundable: value === "Yes, ticket is refundable",
  //     [name]: value,
  //   })
  // } else if(name === "feeBearer"){    
  //     onFormChange({
  //     ...formData,
  //      feeBearer: value === "i want to pass the fees to the attendees" ? "Attendee" : "Owner",
  //     [name]: value,
  //   })    
  //   } else{
    // }      
  };

  useEffect(() => {
    setFormData({
      ...formData,
      type: type,
    });
  }, [type]);

  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ hostEvent }) => hostEvent);
  const [eventID, setEventID] = useState('');
  useEffect(() => {
    setEventID(localStorage.getItem('currenteventID') || '');
  }, []);

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTicket({ eventID, formData })).then((res) => {
      if (res.meta.requestStatus == 'fulfilled') {
        setFormData({
          tickets: {
              type: '',
              name: '',
              price: 0,
              quantity: 0,
              feeBearer: '',
              isRefundable: '',
            },
          
        });
        setGetTickets((prevState: boolean) => !prevState);
        if (newTicketRef.current != null) {
          newTicketRef.current.focus();
        }
        if (isTablet) {
          handleModalClose && handleModalClose();
        }
      }
    });
  };
  return (
    <form
      onSubmit={handleNext}
      css={{
        padding: isTablet ? '0rem' : ' 1.5rem 2.5rem',
        display: 'grid',
        gap: '1.5rem',
        borderRight: isTablet ? '' : `1px solid ${'#E4E4E4'}`,
        height: '100%',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        [screen.lg]: {
          overflowY: 'initial',
          borderBottom: `1px solid ${'#E4E4E4'}`,
        },
        [screen.desktop]: {
          overflowY: 'initial',
          borderBottom: isTablet ? '' : `1px solid ${'#E4E4E4'}`,
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
          Choose Ticket Type
        </p>
      </div>
      <div css={{ display: 'flex', gap: '1rem', marginTop: '-3%' }}>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            width: isTablet ? '100px' : '110px',
            height: '50px',
            background: type === 'Paid' ? '#7C35AB21 ' : '',
            border:
              type === 'Paid' ? '1px solid #7C35AB' : '1px solid #AEAEAE',
            color: type === 'Paid' ? '#7C35AB' : '#AEAEAE',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
          onClick={() => setTicketType('Paid')}
        >
          <p>Paid</p>
        </div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            width: isTablet ? '100px' : '110px',
            height: '50px',
            background: type === 'Free' ? '#7C35AB21 ' : '',
            border:
              type === 'Free' ? '1px solid #7C35AB' : '1px solid #AEAEAE',
            color: type === 'Free' ? '#7C35AB' : '#AEAEAE',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
          onClick={() => setTicketType('Free')}
        >
          <p>Free</p>
        </div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            width: isTablet ? '100px' : '110px',
            height: '50px',
            background: type === 'Donation' ? '#7C35AB21 ' : '',
            border:
              type === 'Donation'
                ? '1px solid #7C35AB'
                : '1px solid #AEAEAE',
            color: type === 'Donation' ? '#7C35AB' : '#AEAEAE',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
          onClick={() => setTicketType('Donation')}
        >
          <p>Donation</p>
        </div>
      </div>
      <div css={{ marginTop: '-4.5%' }}>
        <HostEventTextField
          label=''
          placeholder='Name ticket e.g VIP'
          type='text'
          name={'name'}
          ref={newTicketRef}
          value={formData.name}
          setValue={handleChange}
        />
      </div>
      <div
        css={{
          width: '100%',
          border: '0.124rem solid #AEAEAE',
          borderRadius: '10px',
          fontSize: '14px',
          fontFamily: "'Poppins', sans-serif",
          marginTop: '-3%',
          display: 'flex',
        }}
      >
        <div
          css={{
            borderRight: '0.124rem solid #AEAEAE',
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <input
            type='text'
            placeholder='Price (NGN)'
            value={
              formData.price === 0
                ? ''
                : formData.price
            }
            name='price'
            onChange={handleChange}
            inputMode='numeric'
            disabled={type !== 'Paid'}
            css={{
              height: '3.3rem',
              width: '90%',
              padding: '1rem',
              border: `none`,
              borderRadius: '10px',
              fontSize: '14px',
              fontFamily: "'Poppins', sans-serif",
            }}
          />
        </div>
        <div
          css={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            fontWeight: '500',
          }}
        >
          <p>Fee (NGN)</p>
          <p>
            N{type === 'Paid' ? 300 : type === 'Donation' ? 100 : 0}
          </p>
        </div>
      </div>
      <p css={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
        You will be charged N
        {type === 'Paid' ? 300 : type === 'Donation' ? 100 : 0} + 3%
        ticket service fee and 3% payment processing fee of the price inputed
        per ticket sold to attendees
      </p>
      <HostEventTextField
        label=''
        placeholder='Enter ticket quantity'
        type='text'
        name='quantity'
        value={
          formData.quantity === 0
            ? ''
            : formData.quantity
        }
        setValue={handleChange}
      />
      <HostEventTextField
        label='Who want to handle the fee?'
        placeholder='pass'
        type='select'
        name='feeBearer'
        options={[
          {
            value: 'attendee',
            label: 'I want to pass the fees to the attendees',
          },
          { value: 'owner', label: 'I want to absorb the fees' },
        ]}
        value={formData.feeBearer}
        setValue={handleChange}
      />
      <div>
        <HostEventTextField
          label='Can attendees ask for a refund?'
          placeholder='refundable'
          type='select'
          options={[
            {
              value: true,
              label: 'Yes, ticket is refundable',
            },
            {
              value: false,
              label: 'No, ticket is non-refundable',
            },
          ]}
          value={formData.isRefundable}
          name='isRefundable'
          setValue={handleChange}
        />
        <p css={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
          A refund will lead to you getting your payment 3 to 5 working days to
          your wallet after your events have ended.
        </p>
      </div>

      <button
        css={{
          fontSize: '1rem',
          fontWeight: 'bold',
          color: '#7C35AB',
          border: `1px solid ${'#7C35AB'}`,
          height: '45px',
          marginBottom: isTablet ? '2rem' : '0.5rem',
          background: '#fff',
          borderRadius: '26px',
          width: isTablet ? '100%' : '45%',
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
          'Add Ticket'
        )}
      </button>
      {isTablet && <Box height={'0.125rem'} />}
    </form>
  );
};

export default AddTicketForm;
