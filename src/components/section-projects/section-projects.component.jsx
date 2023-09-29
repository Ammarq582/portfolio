import HeadingPrimary from '../heading-primary/heading-primary.component';
import Project from '../project/project.component';
import SectionContainer from '../section-container/section-container.component';
import './section-projects.styles.scss'


const projectsList = [
    {
      name: 'Dopefolio',
      description: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
      imageUrl: 'https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg',
      linkAddress: 'http://localhost:3000/',
    },
    {
      name: 'Wilsonport',
      description: 'Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.',
      imageUrl: 'https://d33wubrfki0l68.cloudfront.net/9199afe42f789dbddb324ed3edd326e080e693c1/28f54/assets/jpeg/wilsonport.jpeg',
      linkAddress: 'http://localhost:3000/',
    },
    {
      name: 'Boreal Coffee Clone',
      description: "I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.",
      imageUrl: 'https://d33wubrfki0l68.cloudfront.net/61fc288f39a306e3130c72643480ce015dec48ae/e3272/assets/jpeg/boreal-coffee-clone.jpeg',
      linkAddress: 'http://localhost:3000/',
    },
    {
      name: 'Crown Template',
      description: 'Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.',
      imageUrl: 'https://d33wubrfki0l68.cloudfront.net/74f6186aaa2b6d5f6ea6da1013abfeb672f5c807/aee81/assets/jpeg/crown-template.jpeg',
      linkAddress: 'http://localhost:3000/',
    },
]

const SectionProjects = () => {
    return(
        <div className="section-projects">
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