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
        // increase session chips info
        // find next session type
        // increment number of sessions
        // find new time
        return {
          ...state,
          started: false,
          sessionInfo: {
            ...state.sessionInfo,
            [state.session]: state.sessionInfo[state.session] + 1,
          },
          session: cyclePomodoroType(state.iteration),
          iteration: state.iteration + 1,
          time: {
            m: pomodoroLength[cyclePomodoroType(state.iteration)],
            s: 0,
          },
        };
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
