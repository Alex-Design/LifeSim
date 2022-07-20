import { reactive } from "vue";

const currentEvents = reactive({});

const allEvents = reactive({
  random_events: {
    prank_call: {
      name: "Phone Call",
      chance: 1.0,
      text: "There is a phone call waiting for you!",
      eventFunction: "eventAnswerPrankCall()",
    },
    inheritance: {
      name: "Inheritance",
      chance: 1.0,
      text: "You have inherited money!",
      eventFunction: null,
    },
  },
  // requirement_events: {
  //
  // }
});

export function generateRandomEvent() {
  // TODO get one of the events randomly
  for (let randomEventId in allEvents.random_events) {
    currentEvents[randomEventId] = {};
    Object.assign(
      currentEvents[randomEventId],
      allEvents.random_events[randomEventId]
    );
    break;
  }
}

// Load data from localstorage
export function addToCurrentEvents(eventType, eventId) {
  currentEvents[eventId] = {};
  Object.assign(currentEvents[eventId], allEvents[eventType][eventId]);
}

export function removeFromCurrentEvents(eventId) {
  delete currentEvents[eventId];
}

export function loadEventData(currentEventsData) {
  let props = Object.keys(currentEventsData);
  for (let property in props) {
    currentEvents[props[property]] = currentEventsData[props[property]];
  }
}

export function startGameResetEvents() {
  for (let event in currentEvents) {
    delete currentEvents[event];
  }
}

export default currentEvents;
