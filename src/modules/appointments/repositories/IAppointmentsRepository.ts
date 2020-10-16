import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInMonthForProviderDTO from '../dtos/IFindAllInMonthForProviderDTO';

interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthForProvider(
    data: IFindAllInMonthForProviderDTO,
  ): Promise<Appointment[]>;
}

export default IAppointmentsRepository;
