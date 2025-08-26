import { Publisher, Subjects, TicketCreatedEvent } from '@ot-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}