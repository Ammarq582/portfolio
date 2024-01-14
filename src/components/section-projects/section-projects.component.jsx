import HeadingPrimary from '../heading-primary/heading-primary.component';
import Project from '../project/project.component';
import SectionContainer from '../section-container/section-container.component';
import './section-projects.styles.scss'


const projectsList = [
  {
    name: 'MyFlix',
    description: "MyFlix is a free streaming web app that i developed using TMDB API that allows you to watch your favorite shows and movies for free",
    imageUrl: 'https://i.ibb.co/ccsJwFN/Myflix.jpg',
    linkAddress: 'https://mynexters.netlify.app/',
  },
  {
    name: 'Your Clothing',
    description: 'Your Clothing is a demo webapp for online clothing store template and I created this webapp from scratch using the frontend tools I know.',
    imageUrl: 'https://i.ibb.co/7J7Hpds/Your-Clothing.jpg',
    linkAddress: 'https://yourclothing.netlify.app/',
  },
  {
    name: 'Booking Tours',
    description: 'Booking Tours is a demo website for booking tours and I created this beautiful website from scratch using the frontend tools I know.',
    imageUrl: 'https://i.ibb.co/y6JcH9W/Booking-Tours.jpg',
    linkAddress: 'https://booking-tours.netlify.app/',
  },
]

const SectionProjects = () => {
    return(
        <div id='projects' className="section-projects">
            <SectionContainer>
                <HeadingPrimary>
                    <h2>Projects</h2>
                    <p>Here you will find some of the personal projects that I created with each project containing its own case study</p>
                </HeadingPrimary>
                <div className="projects-container">
                    {
                        projectsList.map(project => <Project project={project}/>)
                    }
                </div>
            </SectionContainer>
        </div>
    )
}

export default SectionProjects;