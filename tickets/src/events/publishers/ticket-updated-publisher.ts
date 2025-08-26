import { Publisher, Subjects, TicketUpdatedEvent } from '@ot-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}