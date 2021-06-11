import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Typical from 'react-typical';
import CardWithText from './elements/CardWithText'
import * as constants from './constants'
import axios from 'axios'

// styles for the programming image
const progImgStyle = {
    backgroundImage: "url(/programming.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "45%",
    backgroundPositionY: "45%"
}

export default function Programming() {

    const [username, setUsername] = useState("");
    const [roasts, setRoasts] = useState([]);
    const [displayedRoast, setDisplayedRoast] = useState('');

    let roastIdx = 0;

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (roasts.length == 0) {
        axios.get(`https://api.github.com/users/${username}`)
            .then(res => {
                roastGit(res.data);
            })
            .catch((err) => console.log(err))

        axios.get(`https://api.github.com/users/${username}/repos`)
            .then(res => { roastRepos(res.data) })
            .catch((err) => console.log(err))
        } else {
            roastIdx++;
            setDisplayedRoast(roasts[roastIdx]);
        }
    }

    const addRoast = (newRoast) => {
        setRoasts(roasts.push(newRoast));
    }

    const roastGit = (data) => {
        addRoast(`${data.public_repos} public repos? So much for collaborating on code huh`)
        if (data.public_gists == 0) { addRoast("0 public gists? Do you even know what that is?") }
        else { addRoast(`Damn, you have ${data.public_gists} gists? Who even uses gists`) }
        addRoast(`${data.followers} followers? Pathetic`);

        if (data.bio === null) {
            addRoast("Programming so much that you don't even have a git bio?")
        }
        if (data.company === null) { addRoast("Unemployed or so lazy that you don't even put your company on your git profile?") }
        if (data.blog === null) { addRoast("TFW you don't even have a website in your bio") }
        if (data.location === null) { addRoast("Too insecure to put your location on your profile?") }
        if (data.email === null) { addRoast("Maybe putting your email on your git profile will get you more freelance clients... lol jk")}
        if (data.hireable != null) { addRoast("Unemployed? Yeah, I can tell.") }
        if (data.bio === null) { addRoast("Too lazy to update your bio or do you just have nothing to say?") }
        if (data.twitter_username === null) { addRoast("Doesn't every dev flex their twitter in their github bio?") }

        setDisplayedRoast(roasts[1]);
    }

    const roastRepos = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className="w-full h-threequarters sm:h-threequarters 
                            flex justify-center items-center text-center 
                            font-extralight text-2xl sm:text-4xl text-white font-roboto
                            overflow-hidden 
                            bg-gradient-to-bl from-green-500">
                <motion.div layoutId="programmingHero" transition={constants.TRANSITION_SETTINGS} alt="Programming Evgeny" className="object-cover min-h-full w-full -z-10" style={progImgStyle} />
                <div className="absolute mx-2">
                    <Typical
                        steps={
                            [
                                '', 1500,
                                'Hello!', 1000,
                                "I'm Evgeny 👋", 1500,
                                "I...", 500,
                                "I sometimes write code.", 1500,
                                "I can code in Java", 1500,
                                "I can code in spaghetti 🍝", 500,
                                "I can code in R", 2000,
                                "I can visualize hell using JS", 2000,
                                "I coded this site in React + Tailwind", 1500,
                                "I have impostor syndrome?", 1500,
                                "I have 3 followers on github", 1500,
                                "I parse HTML using regex", 1500
                            ]
                        }
                        loop={Infinity}
                        wrapper="p"
                    />
                </div> 
            </div>

            <h2 className="text-4xl w-full text-center mt-10">Sites I've built</h2>           

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 px-5 mb-10 ">
                <CardWithText 
                    tags="WordPress, Design" 
                    title="Erasmus Centre for Data Analytics" 
                    url="https://www.centre4data.nl/"
                    image="centre4data.jpg"
                    description="Website I built fully on WordPress for an organization within Erasmus University. 
                                    The site was designed by an external team, and I built it to those exact design specs. 
                                    Essentially, this was my first 'proper' paid web development gig."
                />
                <CardWithText 
                    tags="WordPress, Design"
                    title="Erasmus Tech Community"
                    image="erasmustech.jpg"
                    url="https://www.erasmustech.io/"
                    description="I used to organize cool tech events at Erasmus University, and I built and designed our site from the ground up.
                                    It does run on WordPress, but it was the first site I ever built. Not bad, if I dare say so myself."
                />

            </div>

            <h2 className="text-4xl w-full text-center my-10">But... Can Evg backend?</h2>

            <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        {roasts.length == 0 && <h4 className="text-xs font-medium text-green-500 uppercase dark:text-blue-400 text-center my-2">Introducing</h4>}
                        {roasts.length == 0 && <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100 text-center">Roast my Git</h2>}

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-200 text-justify">
                            { roasts.length == 0 ?
                            "How <b>dare</b> you assume that I can't backend? I'm not amazing at web-related backend, but I'm still trying to imporve. This is why I introduce to you... Roast my git!"
                            : displayedRoast
                            }
                        </p>
                    </div>
                </div>

                <div className="align-middle">
                    <div className="w-full flex items-center justify-center mb-5">
                        <svg width="64" height="64" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#4b5563" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-center pb-6 md:py-0 w-full mx-5">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row">
                                <input className="px-6 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="git" placeholder="Enter your github" aria-label="Enter your github" value={username} onChange={handleChange} />
                                <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Roast me</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 px-5 my-10">
                <div className="max-w-2xl mx-auto overflow-hidden dark:bg-gray-800">
                    <div className="w-full overflow-hidden">
                        <h4 className="text-xs font-medium text-green-500 uppercase dark:text-blue-400 text-center my-2">Introducing</h4>
                        <h3 className="text-2xl text-gray-800 text-center">Roast my git</h3>
                    </div>

                    <div className="px-12 py-6">
                            <p className="text-sm text-gray-600 dark:text-gray-400 justify-center">
                                Well, to tell you the truth... I kinda suck at web-related backend. 
                                I probably just haven't done enough of it. I'm getting better though!
                                <br />
                                So what better way to demonstrate that I suck at it, other than roasting YOUR github page?
                            </p>
                    </div>
                </div>

                <div className="w-full mx-auto overflow-hidden dark:bg-white rounded-lg shadow-md bg-gray-800">
                    <div className="w-full flex justify-center p-2">
                        <svg width="64" height="64" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#FFFFFF" />
                        </svg>
                    </div>

                    <div className="w-full h-full flex justify-center items-center">
                        <input type="text" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}
