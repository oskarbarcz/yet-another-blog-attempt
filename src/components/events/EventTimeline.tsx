import { Timeline } from "flowbite-react";
import EventItem, { type EventItemData } from "./EventItem";

interface EventTimelineProps {
  events: EventItemData[];
}

export default function EventTimeline({ events }: EventTimelineProps) {
  return (
    <Timeline>
      {events.map((e) => (
        <EventItem key={`${e.date}-${e.title}`} event={e} />
      ))}
    </Timeline>
  );
}
