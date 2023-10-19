import HeadingPrimary from '../heading-primary/heading-primary.component';
import Project from '../project/project.component';
import SectionContainer from '../section-container/section-container.component';
import './section-projects.styles.scss'


const projectsList = [
    {
      name: 'Your Clothing',
      description: 'Discover a diverse range of high-quality clothing for men, women, and children. Our fashion-forward collections cater to all tastes, sizes, and budgets.',
      imageUrl: 'https://i.ibb.co/7J7Hpds/Your-Clothing.jpg',
      linkAddress: 'https://yourclothing.netlify.app/',
    },
    {
      name: 'Booking Tours',
      description: 'Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.',
      imageUrl: 'https://i.ibb.co/y6JcH9W/Booking-Tours.jpg',
      linkAddress: 'https://booking-tours.netlify.app/',
    },
    {
      name: 'Nexters',
      description: "I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.",
      imageUrl: 'https://i.ibb.co/8NTQmbJ/Nexters.jpg',
      linkAddress: 'https://mynexters.netlify.app/',
    },
    {
      name: 'Trillo',
      description: 'Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.',
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
                    <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
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