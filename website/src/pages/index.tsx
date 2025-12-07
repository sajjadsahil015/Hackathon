import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Module-1-Robotic-Nervous-System/Week-1/intro">
            Start Here - Module 1 ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function ModuleCard({title, description, link, icon}) {
  return (
    <div className={clsx('col col--3', styles.moduleCard)}>
      <div className={styles.moduleCardContent}>
        <div className="text--center">
          <span style={{fontSize: '4rem'}}>{icon}</span>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
      <div className="text--center">
        <Link className="button button--outline button--primary" to={link}>
          Go to Module
        </Link>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
               <ModuleCard 
                 title="Module 1" 
                 description="The Robotic Nervous System (ROS 2)" 
                 link="/docs/Module-1-Robotic-Nervous-System/Week-1/intro"
                 icon="🧠"
               />
               <ModuleCard 
                 title="Module 2" 
                 description="The Digital Twin (Gazebo/Unity)" 
                 link="/docs/Module-2-Digital-Twin/Week-4/intro"
                 icon="🏙️"
               />
               <ModuleCard 
                 title="Module 3" 
                 description="The AI-Robot Brain (Isaac Sim)" 
                 link="/docs/Module-3-AI-Robot-Brain/Week-8/intro"
                 icon="🤖"
               />
               <ModuleCard 
                 title="Module 4" 
                 description="Vision-Language-Action (VLA)" 
                 link="/docs/Module-4-VLA/Week-12/intro"
                 icon="👁️"
               />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}