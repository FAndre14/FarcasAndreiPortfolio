import React from 'react'
import "./portfolio.css";
import IMG from "../../assets/user-placeholder.png"

const portfolioData = [
    {
        id: 1,
        image: IMG,
        title: "This is a portfolio Title",
        github: "https://github.com",
        demo: "https://google.com"
    },
    {
        id: 2,
        image: IMG,
        title: "This is a portfolio Title",
        github: "https://github.com",
        demo: "https://google.com"
    },
    {
        id: 3,
        image: IMG,
        title: "This is a portfolio Title",
        github: "https://github.com",
        demo: "https://google.com"
    },
    {
        id: 4,
        image: IMG,
        title: "This is a portfolio Title",
        github: "https://github.com",
        demo: "https://google.com"
    },
    {
        id: 5,
        image: IMG,
        title: "This is a portfolio Title",
        github: "https://github.com",
        demo: "https://google.com"
    },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h2>My Portfolio</h2>

        <div className="container portfolio__container">
                {
                    portfolioData.map(({id, image, title, github, demo}) => {
                        return (
                        <article className='portfolio__item' key={id}>
                            <div className="portfolio__item-image">
                                <img src={image} alt={id} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
                                <a href={demo} className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Demo</a>
                            </div>
                        </article>
                        )
                    })
                }

        </div>
    </section>
  )
}

export default Portfolio;