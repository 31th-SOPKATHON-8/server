import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getReservationTicket = async () => {
  const ticket = await prisma.reservation_ticket.findMany();
  return ticket;
};
const getTicketInformation = async () => {
  const ticket = await prisma.ticketInformation.findMany();
  return ticket;
};
const trailService = {
  getReservationTicket,
  getTicketInformation,
};

export default trailService;
