# Is India Working Right Now?

This tool just reports if it's currently indian working hours for most workplaces, right now.

It works on client-side only, hosted on github pages.

Its main use is for people in timezones other than india, so they don't need to do the maths in their head, especially because india is like .35hrs off gmt or bst or something, I can never remember which.

It doesn't need any API use, it's client-side only, and should be able to ask the browser for the user's timezone offset, including daylight saving.

## Purpose

Most of the big generative AI companies get heavy usage when India is awake, so anyone else gets really shitty slow service, and poor quality text generation because the servers are overloaded and the AI companies distribute load by just tuning the parameters to use fewer cycles per token (increasing repetition, reducing comprehension, etc).

The main page shows the current time in the user's browser, the current time in india, and a message in red showing if indian office workers are currently working, and green if they're not working.

It also shows how many hours left and the expected local time, until either Indian workers stop working, or start working again, based on the current status.