/** @jsxImportSource @emotion/react */

import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { Button } from 'styles/components/button';
import { screen } from 'styles/theme';
import SearchSelect from './searchSelect';

export default function FindEventFragment() {
  const desktop = useMediaQuery('(max-width:1024px)');
  const isTablet = useMediaQuery('(max-width: 900px)');
  const [searchData, setSearchData] = useState({
    location: '',
    eventType: '',
    category: '',
    price: '',
  });
  const [active, setActive] = useState('');
  const handleActive = (dropdown: string) => {
    console.log('dropdown', dropdown);
    setActive(dropdown);
  };
  const handleSelectValue = (name: string, value: string) => {
    setSearchData({ ...searchData, [name]: value });
  };

  return (
    <div
      css={{
        width: '67%',
        backgroundColor: '#fff',
        marginLeft: isTablet ? '' : '3.5rem',
        boxShadow: '#00000029 0px 0px 10px',
        borderRadius: '56px',
        marginTop: '4%',
        fontFamily: "'Poppins', sans-serif",
        height: '4.3rem',
        display: 'grid',
        gridTemplateColumns: '23% 20% 20% 20% 22%',
        alignItems: 'center',
        padding: '0 2rem',
        paddingRight: '1rem',
        justifyContent: 'space-between',
        [screen.tablet]: {
          width: '85%',
          marginInline: 'auto',
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          padding: '2rem 1.5rem',
          alignItems: 'start',
          boxSizing: 'border-box',
        },
        [screen.desktop]: {
          gap: isTablet ? '1rem' : '3%',
        },
        [screen.lg]: {
          gap: '5%',
          padding: '0 2rem',
        },
      }}
    >
      <SearchSelect
        menuList={[
          'Abia',
          'Adamawa',
          'Akwa Ibom',
          'Anambra',
          'Bauchi',
          'Bayelsa',
          'Benue',
          'Borno',
          'Cross-River',
          'Delta',
          'Ebonyi',
          'Edo',
          'Ekiti',
          'Enugu',
          'Gombe',
          'Imo',
          'Jigawa',
          'Kaduna',
          'Katsina',
          'Kano',
          'Kebbi',
          'Kogi',
          'Kwara',
          'Lagos',
          'Nasarawa',
          'Niger',
          'Ogun',
          'Ondo',
          'Osun',
          'Oyo',
          'Plateau',
          'Rivers',
          'Sokoto',
          'Taraba',
          'Yobe',
          'Zamfara',
        ]}
        placeholder='Search events in'
        value={searchData.location}
        handleSelect={handleSelectValue}
        name='location'
        onChange={(e) =>
          setSearchData({ ...searchData, location: e.target.value })
        }
        inputWidth={desktop ? '77%' : '10vw'}
        paddingInline='0'
        height='24rem'
        active={active}
        handleActive={handleActive}
        containerSize='100%'
      />
      <SearchSelect
        menuList={[
          'Social',
          'Cultural',
          'Educational',
          'Fundraising',
          'Business',
          'Sports',
          'Political',
          'Religious',
          'Music',
          'Theatre',
          'Film',
          'Food and Drink',
          'Art',
          'Book',
          'Gaming',
          'Health and Wellness',
          'Outdoor',
        ]}
        placeholder='Event Type'
        name='eventType'
        value={searchData.eventType}
        handleSelect={handleSelectValue}
        onChange={(e) =>
          setSearchData({ ...searchData, eventType: e.target.value })
        }
        inputWidth={isTablet ? '78%' : '65%'}
        handleActive={handleActive}
        height='20rem'
        active={active}
        containerSize={isTablet ? '100%' : '90%'}
      />
      <SearchSelect
        menuList={[
          '50,000',
          '100,000',
          '500,000',
          '1,000,000',
          '5,000,000',
          '10,000,000',
        ]}
        placeholder='Price'
        name='price'
        value={searchData.price}
        handleSelect={handleSelectValue}
        onChange={(e) =>
          setSearchData({ ...searchData, price: e.target.value })
        }
        inputWidth={desktop ? '100%' : '8vw'}
        containerSize={isTablet ? '90%' : '120%'}
        active={active}
        handleActive={handleActive}
      />
      <SearchSelect
        menuList={[
          'Social',
          'Cultural',
          'Educational',
          'Fundraising',
          'Business',
          'Sports',
          'Political',
          'Religious',
          'Music',
          'Theatre',
          'Film',
          'Food and Drink',
          'Art',
          'Book',
          'Gaming',
          'Health and Wellness',
          'Outdoor',
        ]}
        placeholder='Category'
        name='category'
        value={searchData.category}
        handleSelect={handleSelectValue}
        onChange={(e) =>
          setSearchData({ ...searchData, category: e.target.value })
        }
        inputWidth={desktop ? '100%' : '7vw'}
        height='20rem'
        containerSize={isTablet ? '90%' : '80%'}
        active={active}
        handleActive={handleActive}
      />

      <Button
        css={{
          padding: isTablet ? '.7rem 2rem' : '.8rem 2rem',
          height: 'max-content',
          fontSize: '1.1rem',
          // [screen.desktop]: { width: isTablet ? '12rem' : '7rem' },
          [screen.lg]: {},
        }}
      >
        Find Event
      </Button>
    </div>
  );
}
