import {
  pomodoroLength,
  reverseTime,
  cyclePomodoroType,
  ringBell,
} from "@/app/_lib";

export const pomodoroReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, started: true };

    case "UPDATE":
      const updatedTime = reverseTime(state.time);

      // if time has finished for that session
      if (updatedTime.m === 0 && updatedTime.s === 0) {
        state.audio && ringBell();

        // pause timer
        state.started = false;
        // increase session chips info
        state.sessionInfo[state.session] += 1;
        // find next session type
        state.session = cyclePomodoroType(state.iteration);
        // increment number of sessions
        state.iteration += 1;
        // find new time
        state.time = {
          m: pomodoroLength[state.session],
          s: 0,
        };

        return { ...state };
      }

      return { ...state, time: updatedTime };

    case "RESTART":
      // reset the time and pause the timer
      return {
        ...state,
        time: { m: pomodoroLength[state.session], s: 0 },
        started: false,
      };

    case "SKIP":
      state.audio && ringBell();
      // increase the iteration by one unit, update session type, and time accordingly
      return {
        ...state,
        started: false,
        iteration: state.iteration + 1,
        session: cyclePomodoroType(state.iteration),
        time: {
          m: pomodoroLength[cyclePomodoroType(state.iteration)],
          s: 0,
        },
      };

    case "ENABLE AUDIO":
      return { ...state, audio: true };

    case "DISABLE AUDIO":
      return { ...state, audio: false };
  }
};
