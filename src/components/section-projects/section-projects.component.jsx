import HeadingPrimary from '../heading-primary/heading-primary.component';
import Project from '../project/project.component';
import SectionContainer from '../section-container/section-container.component';
import './section-projects.styles.scss'


const projectsList = [
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
    {
      name: 'Nexters',
      description: "Nexters is a demo website for real estate business and I created this website from scratch using the frontend tools I know.",
      imageUrl: 'https://i.ibb.co/8NTQmbJ/Nexters.jpg',
      linkAddress: 'https://mynexters.netlify.app/',
    },
    {
      name: 'Trillo',
      description: 'Trillo is a demo website for bookings hotels and I created this website from scratch using the frontend tools I know.',
      imageUrl: 'https://i.ibb.co/WPh1ySK/Trillo.jpg',
      linkAddress: 'https://mytrillos.netlify.app/',
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