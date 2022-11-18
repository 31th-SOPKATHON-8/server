import { Request, Response } from "express";
import { trailService } from "../service";

const getReservationTicket = async (req: Request, res: Response) => {
  const data = await trailService.getReservationTicket();
  return res
    .status(200)
    .json({ status: 200, message: "승차권 예매 정보 조회 성공", data });
};

const getTicketInformation = async (req: Request, res: Response) => {
  const data = await trailService.getTicketInformation();
  return res
    .status(200)
    .json({ status: 200, message: "승차권 예매 정보 조회 성공", data });
};

const trailController = {
  getReservationTicket,
  getTicketInformation,
};

export default trailController;
