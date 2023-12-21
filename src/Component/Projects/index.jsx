import Project1 from '../../assets/images/project1.jpg';
import Project2 from '../../assets/images/project2.jpg';
import Project3 from '../../assets/images/project3.jpg';
import Project4 from '../../assets/images/project4.jpg';
import Project5 from '../../assets/images/project5.jpg';

import './Projects.css';

const Projects = () => {

	const projects = [
    {title: 'Online Zoo', link: 'https://rolling-scopes-school.github.io/nasticbazlic-JSFE2022Q3/online-zoo/assets/pages/home/index.html', img: Project1 },
    {title: 'Webovio', link: 'https://nasticbazlic.github.io/mywebovio/', img: Project2 },
    {title: 'Team', link: 'https://nasticbazlic.github.io/my-team-project', img: Project3 },
    {title: 'Marico', link: 'https://nasticbazlic.github.io/my-marico-project', img: Project4 },
    {title: 'Exchange rates', link: 'https://nasticbazlic.github.io/my-exchange-rates', img: Project5 },
  ]

  return (
		<section className='projects' id='projects'>
      <h2>
				MY PROJECTS
      </h2>
      <div className='projects__items'>
        {projects.map((project, index) => (
          <div key={index} className='card'>
						<div className="card-front">
							<img src={project.img} alt={project.title} />
						</div>
            <div className="card-back">
							<a href={project.link} target="_blank" rel="noopener noreferrer">
								{project.title}
							</a>
						</div>
          </div>
        ))}
      </div>
    </section>
	)
}

export default Projects;
