/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import React from 'react';
import { useAppSelector } from 'redux/store';
import { ButtonFormFilled } from 'styles/components/button';
import { IEvent } from 'types/event';
import { formatNumber } from 'utitlities/commonHelpers/numberFormatter';

const AttenEventCTA = ({ link }: { link: string }) => {
  const { event } = useAppSelector(({ event }) => event);
  // const ticketRange = (event: IEvent) => {
  //   const tickets = event.tickets;
  //   const ticketPriceArray: number[] = [];

  //   if (tickets && tickets.length < 1) {
  //     return 'Free';
  //   } else {
  //     if (tickets && tickets.length === 1)
  //       return `$${formatNumber(tickets[0].ticketPrice)}`;
  //     tickets &&
  //       tickets.map((ticket) => {
  //         ticketPriceArray.push(ticket.ticketPrice);
  //       });
  //     ticketPriceArray.sort((a, b) => a - b);
  //     return `${
  //       ticketPriceArray[0] === 0
  //         ? 'Free'
  //         : `$${formatNumber(ticketPriceArray[0])}`
  //     } - $${formatNumber(ticketPriceArray[ticketPriceArray.length - 1])}`;
  //   }
  // };

    const ticketRange = (prices) => {
    const priceArr = prices.replace(/[NGN]/g, '').split('-');

    if (priceArr[0] === priceArr[1]) {
      if (priceArr[0] === 0) return 'Free';
      return `#${formatNumber(priceArr[0])}`;
    } else {
      return (
        `#${formatNumber(priceArr[0])}` -
        `#${formatNumber(priceArr[priceArr.length - 1])}`
      );
    }
  return (
    <div
      css={{
        width: '325px',
        height: '92px',
        boxShadow: `0px 0px 10px ${'#00000029'}`,
        borderRadius: '40px 40px 0px 0px',
        display: 'grid',
        placeContent: 'center',
        position: 'fixed',
        background: '#FFFFFF',
        bottom: '0',
        right: '5%',
        zIndex: '3',
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.2rem',
        }}
      >
        <p css={{ color: '#000', fontWeight: 'bold' }}>{ticketRange(event.priceRange)}</p>
        <Link href={link}>
          <ButtonFormFilled css={{ width: '172px' }}>
            ATTEND EVENT
          </ButtonFormFilled>
        </Link>
      </div>
    </div>
  );
};

export default AttenEventCTA;
