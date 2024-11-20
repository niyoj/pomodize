# Pomodize - A modern progressive web app to manage your time

## Table of Contents
- [Introduction](#introduction)
- [End goals](#end-goals)
- [Tools Used](#tools-used)
- [Learnings](#learnings)
- [Future enhancements](#future-enhancements)
- [Thanks to](#thanks-to)

# Introduction
Eye strain is a common problem faced by anyone who spends long hours on a computer. The simplest solution is to take breaks every 20 to 25 minutes, but it’s easy to forget this when you’re deeply focused. To address this issue, I thought of developing a mobile-friendly web application that tracks activity and reminds users to take breaks. The application incorporates the Pomodoro technique to help maintain focus and includes additional features such as a stopwatch and task management to enhance productivity.

## Demo
Visit: https://youtube.com/shorts/ryCHTCQfJO8?feature=share

https://github.com/user-attachments/assets/67dcbb1f-8d04-4603-bd91-b0ebeafc6a2e


## Link to Design Files
- I started by designing application in Figma and once the design was over I used NextJS to create the application. The design can be accessed through this link. [https://www.figma.com/design/WLK5cYuUc6LKBdW6EblRVs/Pomodize.me?node-id=3-3&t=cPBdLAhfsMJTvHt8-1](https://www.figma.com/design/WLK5cYuUc6LKBdW6EblRVs/Pomodize.me?node-id=3-3&t=cPBdLAhfsMJTvHt8-1)

# End Goals
- The goal was to implement the Pomodoro technique through a mobile application. Why a mobile app? The reason is that I wanted to continuously monitor my progress, and switching tabs didn’t seem practical for this purpose.
- I aimed to create a standalone application, if possible, to provide a better experience on mobile devices.
- Additionally, I wanted the app to feel like an installable application, with minimal delays and a smooth user experience.

# Tools Used
- Figma for design,
- NextJS as Frontend framework,
- Lucide.dev for Icons.

# Learnings

## Naming Folders

I was previously coding on my Linux machine, where directory names are case-sensitive (e.g., `file.txt` and `File.txt` are treated as different files). However, when I switched to Windows, I encountered a problem because Windows file names are case-insensitive by default. This caused an issue when I renamed a folder from App to app on my Windows machine and then pushed the changes to Git. As a result, both App and app folders ended up existing.

To solve this problem, I learned about Kebab case, where file names are written in lowercase with hyphens separating words (e.g., `timer-display`). This approach not only solved the issue but also improved readability.

## Folder Structure

- `_features`: contains all the components separated based on the feature that they provide.
- `_features\ui`: contains the reusable UI components like buttons.
- `_lib`: contains reusable set of functions like datafetching functions.

Here, `_<folder>` means the folder is a private route i.e. it is non-routable.

## Routing

- With Next.js, routing is a breeze, but my goal was to have a consistent layout with a navbar at the bottom and content at the top for all routes like /pomodoro. However, for one specific route, /zen, I wanted a different layout without the navbar at the bottom. To solve this, I used Next.js Route Groups.
- All the routes that shared the same layout were grouped into the (home) route, while the /zen route was placed in a separate (zen) route group, with each group having its own layout.js.

## Persistance of Timer

**Problem:** The requirement was for the timer to continue running even when navigating away from the /time-tools page. Upon returning, I needed to display the elapsed time.

**Solution:** When the timer was running, I stored two pieces of information in the local storage: the stopwatch time in milliseconds and the current system time in milliseconds. These values were updated every 10 milliseconds because the stopwatch UI only displayed two digits for the milliseconds, meaning each update represented 10 milliseconds. When the user returned after some time, I checked if these values were present in the local storage. If they were, the current time was calculated as `timer milliseconds + ( Date.now() - previous time in milliseconds )`, i.e., the elapsed milliseconds on the stopwatch plus the difference between the current system time and the last time the timer was active.

Additionally, I stored separate entries to keep track of the laps and to monitor if the user had paused and navigated away. In the paused state, the timer would not continue accumulating time.

# Future Enhancements
- [ ] Use service workers to cached the pages to make application run even offline
- [ ] Make the web application feel like Native application through in-depth study on PWAs.

# Thanks to

- Sound Effect from [Pixabay](https://pixabay.com/sound-effects/)
