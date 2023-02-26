import { useState } from "react";
import "../../styles/HomePage/events.css";
import Title from "./Title";

interface Event {
  name: string | undefined;
  time: string | undefined;
  place: string | undefined;
  shortDescription: string | undefined;
}

const EventDetail = (props: Event) => (
  <div className="event">
    <div className="day">
      <div className="text-center">
        <p className="medium-bold-text medium-text">
          {props.time?.split("/")[0]}/{props.time?.split("/")[1]}
        </p>
        <p className="medium-bold-text medium-text">
          {props.time?.split("/")[2]}
        </p>
      </div>
    </div>
    <div>
      <p className="medium-bold-text big-text">{props.name}</p>
      <div className="place-icon">
        <img src="./assets/icon-place.png" alt="" />
        <p className="very-small-text">{props.place}</p>
      </div>
      <p className="very-small-text">{props.shortDescription}</p>
    </div>
  </div>
);

const mockEvents: Event[] = [
  {
    name: "SỰ KIỆN MÙA XUÂN",
    time: "15/01/2023",
    place: "Địa điểm",
    shortDescription:
      " Lorem ipsum dolor sit amet, sircatu consectetur adipiscing elit.",
  },
  {
    name: "SỰ KIỆN MÙA XUÂN",
    time: "15/01/2023",
    place: "Địa điểm",
    shortDescription:
      " Lorem ipsum dolor sit amet, sircatu consectetur adipiscing elit.",
  },
  {
    name: "SỰ KIỆN MÙA XUÂN",
    time: "15/01/2023",
    place: "Địa điểm",
    shortDescription:
      " Lorem ipsum dolor sit amet, sircatu consectetur adipiscing elit.",
  },
  {
    name: "SỰ KIỆN MÙA XUÂN",
    time: "15/01/2023",
    place: "Địa điểm",
    shortDescription:
      " Lorem ipsum dolor sit amet, sircatu consectetur adipiscing elit.",
  },
  {
    name: "SỰ KIỆN MÙA XUÂN",
    time: "15/01/2023",
    place: "Địa điểm",
    shortDescription:
      " Lorem ipsum dolor sit amet, sircatu consectetur adipiscing elit.",
  },
];

export default function Events() {
  const [events, setEvents] = useState(mockEvents);
  return (
    <section id="events">
      <Title
        msg="sự kiện sắp diễn ra"
        colorText="var(--green)"
        colorDivider="var(--grey)"
      ></Title>
      <div className="all-events">
        <div className="slide-event" id="scroll-event">
          {events.map((event: Event) => (
            <EventDetail {...event} />
          ))}
        </div>
        <video
          src="https://player.vimeo.com/external/181445574.hd.mp4?s=d24f32d879305e931468d55e4d7ce6efb5a95c39&amp;profile_id=119"
          controls
        ></video>
      </div>
    </section>
  );
}
