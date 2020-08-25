import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository {
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    public all(): Appointment[] {
        return this.appointments;
    }

    public findByDate(date: Date): Appointment | null {
        const findAppointment = this.appointments.find(appointment => isEqual(date, appointment.date));
        return findAppointment || null;
    }

    public create(data: CreateAppointmentDTO): Appointment {
        const { provider, date } = data;
        const appointment = new Appointment({ provider, date });
        this.appointments.push(appointment);
        return appointment;
    }
}

export default AppointmentsRepository;