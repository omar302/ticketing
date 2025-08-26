import { Publisher, OrderCreatedEvent, Subjects } from '@ot-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}