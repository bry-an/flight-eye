const portfolioItems =
    [
        {
            name: 'WeatherRider',
            gif: '/static/weather-rider-demo.gif',
            still: '/static/weather-rider-demo-still.png',
            problem: "Biking apps don't give users detailed weather at points along their route at a certain time in the future. They also lack headwind information, an important metric for cyclists.",
            solution: 'Enter your start and end points and time of ride, and WeatherRider displays an interactive map with weather information along the route. Users can click any point on the map for weather at that point at the selected time.',
            technologies: ['/static/google-logo.png', '/static/javascript-logo.png', '/static/jquery-logo.png'],
            githubLink: 'https://github.com/bry-an/weather-rider',
            liveLink: 'https://bry-an.github.io/weather-rider/',
            id: 'weather-rider'
        },
        {
            name: 'Clean NYT',
            gif: '/static/times-react-demo.gif',
            still: '/static/times-react-demo-still.png',
            problem: "Most news sites don't provide a clean interface for searching articles and saving them to read at the user's convenience.",
            solution: "Readers can search for New York Times articles, with an optional date selection, see the results, and save articles for later, all in a snappy clutter-free interface on Clean NYT.",
            technologies: ['/static/react-logo.png', '/static/mongo-logo.png'],
            githubLink: 'https://github.com/bry-an/times-react',
            liveLink: 'https://thawing-fortress-55637.herokuapp.com/',
            id: 'nyt-clean'
        },
        {
            name: 'QuickCal',
            still: '/static/quickcal-demo-still.png',
            gif: '/static/quickcal-demo.gif',
            problem: "Online calendars tend to be bulky and overpowered for quick to-dos or short reminders. Where's a lighter option?",
            solution: "QuickCal is a point-and-click style more traditional calendar, allowing users to jot down quick notes or events for each day in a clean interface, without the clutter of a full calendar suite.",
            technologies: ['/static/vue-logo.png', '/static/mongo-logo.png'],
            githubLink: 'https://github.com/bry-an/QuickCal',
            liveLink: 'https://fierce-atoll-33119.herokuapp.com/',
            id: 'quick-cal'
        },

    ]

export default portfolioItems