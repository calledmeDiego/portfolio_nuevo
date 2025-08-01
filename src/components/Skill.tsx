
import { SkillCard } from './SkillCard';

interface SkillItemProps {
    imgSrc: string;
    label: string;
    desc: string;
}

const skillItem: SkillItemProps[] = [
  {
    imgSrc: 'https://brandeps.com/logo-download/C/C-Sharp-logo-vector-01.svg',
    label: 'C#',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/python.svg',
    label: 'Python',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/512px-.NET_Core_Logo.svg.png?20210328084203',
    label: 'ASP .NET Core Web API',
    desc: 'Web Server - C# Framework',
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/angular-icon.svg',
    label: 'Angular',
    desc: 'Framework',
  },
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/benc-uk/icon-collection/e33ee714d05a24a81cf6ccd967ef34b22cb77e65/azure-icons/SQL-Server.svg',
    label: 'SQLServer',
    desc: 'Database',
  },
  {
    imgSrc: 'https://www.svgrepo.com/show/374118/tailwind.svg',
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Bootstrap.svg',
    label: 'Bootstrap',
    desc: 'User Interface',
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/figma/figma-original.svg',
    label: 'Figma',
    desc: 'Design Tool'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/shgysk8zer0/logos/56954404263cc00a5c07025f43ee99dd81a63858/mono/light/github.svg',
    label: 'Github',
    desc: 'Repository'
  },
  {
    imgSrc: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/edent/SuperTinyIcons/9f95f9682c11a11b75859580d45958505b092ffa/images/svg/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/typescript-icon.svg',
    label: 'TypeScript',
    desc: 'Interaction'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/vitejs.svg',
    label: 'Vite',
    desc: 'Build Tool'
  }
];

export const Skill = () => {
  return (
    <section className='section'>
        <div className="container">
            <h2 className='headline-2 reveal-up'>
                
                HERRAMIENTAS QUE UTILIZO
            </h2>

            <p className="font-text text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Descubra las potentes herramientas y tecnologías que utilizo para crear sitios web y aplicaciones excepcionales.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc}, key)=>
                    (
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes='reveal-up'/>    
                    ))
                }
            </div>
        </div>
    </section>
  )
}
