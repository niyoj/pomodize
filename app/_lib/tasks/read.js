export function getAllTasks() {
  return [
    {
      id: 1,
      status: "inProgress",
      title: "Task 1",
      description:
        "Lorem ipsum dolor amit lorem ipsum dolor amit lorem ipsum dolor amit lorem impsum dolor amit lorem ipsum dolor amit lorem ipsum.",
    },
    {
      id: 2,
      status: "pending",
      title: "Task 2",
      description:
        "Lorem ipsum dolor amit lorem ipsum dolor amit lorem ipsum dolor amit lorem impsum dolor amit lorem ipsum dolor amit lorem ipsum.",
    },
    {
      id: 3,
      status: "pending",
      title: "Task 3",
      description:
        "Lorem ipsum dolor amit lorem ipsum dolor amit lorem ipsum dolor amit lorem impsum dolor amit lorem ipsum dolor amit lorem ipsum.",
    },
    {
      id: 4,
      status: "completed",
      title: "Task 4",
      description:
        "Lorem ipsum dolor amit lorem ipsum dolor amit lorem ipsum dolor amit lorem impsum dolor amit lorem ipsum dolor amit lorem ipsum.",
    },
    {
      id: 5,
      status: "pending",
      title: "Task 1",
      description:
        "Lorem ipsum dolor amit lorem ipsum dolor amit lorem ipsum dolor amit lorem impsum dolor amit lorem ipsum dolor amit lorem ipsum.",
    },
  ];
}

export function getPendingTasks() {
  return getAllTasks().filter((item) => item.status === "pending");
}

export function getInProgressTask() {
  return getAllTasks().find((item) => item.status === "inProgress");
}

export function getCompletedTasks() {
  return getAllTasks().filter((item) => item.status === "completed");
}
