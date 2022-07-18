import { reactive } from "vue";

const currentEvents = reactive({});

const allEvents = reactive({
  random_events: {
    prank_call: {
      name: "Prank Call",
      chance: 1.0,
      text: "You have been pranked!",
      eventFunction: null,
    },
  },
  // requirement_events: {
  //
  // }
});

export function generateRandomEvent() {
  for (let randomEventId in allEvents.random_events) {
    let props = Object.keys(allEvents["random_events"][randomEventId]);

    currentEvents[randomEventId] = [];
    for (let property in props) {
      // console.log(allEvents["random_events"][randomEventId][props[property]]);
      currentEvents[randomEventId][props[property]] = allEvents["random_events"][randomEventId][props[property]];

    }

    // console.log(currentEvents);
    break;
  }
}

// Load data from localstorage
export function addToCurrentEvents(eventType, eventId) {
  let props = Object.keys(allEvents[eventType][eventId]);
  for (let property in props) {
    currentEvents[props[property]] = allEvents[props[property]];
  }
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
