import { IEvent } from 'types/event';

export const getTicketQuantity = (event: IEvent) => {
  const ticketsArray = event.tickets;
  let quantity = 0;
  ticketsArray.forEach((ticket) => {
    quantity += ticket.ticketQty;
  });
  return quantity;
};
