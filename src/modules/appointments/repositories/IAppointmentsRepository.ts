import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInMonthForProviderDTO from '../dtos/IFindAllInMonthForProviderDTO';
import IFindAllInDayForProviderDTO from '../dtos/IFindAllInDayForProviderDTO';

interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthForProvider(
    data: IFindAllInMonthForProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayForProvider(
    data: IFindAllInDayForProviderDTO,
  ): Promise<Appointment[]>;
}

export default IAppointmentsRepository;
